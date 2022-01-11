import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { useAxios } from "./useAxios";
import { RedditSubreddit, ListedRawSubreddit } from "../types/reddit";

const fetchSubreddit = async (
  axios: AxiosInstance,
  name: string
): Promise<RedditSubreddit> => {
  const res = await axios.get<ListedRawSubreddit>(`/r/${name}.json`);
  const subreddit = res.data.data;
  return {
    type: "subreddit",
    date: new Date(subreddit.created * 1000),
    ...subreddit,
  };
};

export const useSubreddit = (name: string) => {
  const axios = useAxios();
  return useQuery(["subreddit", name], () => fetchSubreddit(axios, name));
};
