import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { parseComments } from "../util/parseComments";
import { useAxios } from "./useAxios";
import {
  RedditComment,
  MoreChildren,
  MoreChildrenResponse,
} from "../types/reddit";

const fetchMoreChildren = async (
  axios: AxiosInstance,
  moreChildren: MoreChildren,
  linkFullname: string,
  modhash: string
): Promise<
  RedditComment | MoreChildren | Array<RedditComment | MoreChildren>
> => {
  const params = new URLSearchParams();
  params.append("id", moreChildren.id);
  params.append("children", moreChildren.children.join(","));
  params.append("limit_children", "false");
  params.append("api_type", "json");
  params.append("link_id", linkFullname);
  params.append("sort", "confidence");
  const res = await axios.get<MoreChildrenResponse>(
    `/api/morechildren?${params.toString()}`
  );
  const rawComments = res.data.json.data.things;
  const comments = parseComments(rawComments, modhash);

  return comments;
};

export const useMoreChildren = (
  enabled: boolean,
  moreChildren: MoreChildren,
  linkFullname: string,
  modhash: string
) => {
  const axios = useAxios();
  return useQuery(
    ["moreChildren", moreChildren.id],
    () => fetchMoreChildren(axios, moreChildren, linkFullname, modhash),
    { enabled }
  );
};
