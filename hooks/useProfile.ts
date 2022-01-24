import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { useAxios } from "./useAxios";
import {
  Listing,
  RedditSubmission,
  RedditComment,
  ListedRawComment,
  ListedRawSubmission,
  MoreChildren,
} from "../types/reddit";
import { parseMore } from "../util/parseMore";
import { parseComment } from "../util/parseComment";
import { parseSubmission } from "../util/parseSubmission";

const fetchProfile = async (
  axios: AxiosInstance,
  username: string
): Promise<Array<RedditSubmission | RedditComment | MoreChildren>> => {
  const res = await axios.get<Listing<ListedRawComment | ListedRawSubmission>>(
    `/u/${username}/.json`
  );

  const modhash = res.data.data.modhash;
  const content = res.data.data.children
    .map((item) => {
      if (item.kind === "t3") {
        const submission = parseSubmission(item.data, modhash);
        return submission;
      } else if (item.kind === "t1") {
        const comment = parseComment(item.data, modhash);
        return comment;
      } else {
        const more = parseMore(item.data, modhash);
        return more;
      }
    })
    .filter((item) => item !== undefined);

  return content;
};

export const useProfile = (username: string | undefined) => {
  const axios = useAxios();
  return useQuery(["profile", username], () => fetchProfile(axios, username!), {
    enabled: !!username,
  });
};
