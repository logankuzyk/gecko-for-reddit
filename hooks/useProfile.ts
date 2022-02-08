import { AxiosInstance } from "axios";
import { useInfiniteQuery } from "react-query";

import { useAxios } from "./useAxios";
import {
  Listing,
  RedditSubmission,
  RedditComment,
  ListedRawComment,
  ListedRawSubmission,
  MoreChildren,
  Paginated,
} from "../types/reddit";
import { parseMore } from "../util/parseMore";
import { parseComment } from "../util/parseComment";
import { parseSubmission } from "../util/parseSubmission";

const fetchProfile = async (
  axios: AxiosInstance,
  username: string,
  pageParam: string | undefined
): Promise<
  Paginated<Array<RedditSubmission | RedditComment | MoreChildren>>
> => {
  let endpoint = `/u/${username}/.json`;

  if (pageParam) {
    const params = new URLSearchParams();
    params.append("after", pageParam);
    endpoint += `?${params.toString()}`;
  }

  const res = await axios.get<Listing<ListedRawComment | ListedRawSubmission>>(
    endpoint
  );

  const { after, before } = res.data.data;
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

  return {
    data: content,
    before,
    after,
  };
};

export const useProfile = (username: string | undefined) => {
  const axios = useAxios();
  return useInfiniteQuery(
    ["profile", username],
    ({ pageParam }) => fetchProfile(axios, username!, pageParam),
    {
      enabled: !!username,
      getNextPageParam: (lastPage) => lastPage.after,
    }
  );
};
