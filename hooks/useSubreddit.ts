import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { useAxios } from "./useAxios";
import { RedditSubreddit, ListedRawSubreddit } from "../types/reddit";

const fetchSubreddit = async (
  axios: AxiosInstance,
  name: string | undefined
): Promise<RedditSubreddit | undefined> => {
  if (!name) {
    return;
  }

  const res = await axios.get<ListedRawSubreddit>(`/r/${name}/about.json`);
  const subreddit = res.data.data;
  return {
    type: "subreddit",
    date: new Date(subreddit.created * 1000),
    ...subreddit,
  };
};

export const useSubreddit = (subreddit: string | undefined) => {
  const axios = useAxios();
  return useQuery(["subreddit", subreddit], () =>
    fetchSubreddit(axios, subreddit)
  );
};
