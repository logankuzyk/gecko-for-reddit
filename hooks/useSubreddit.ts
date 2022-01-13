import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { useAxios } from "./useAxios";
import { RedditSubreddit, ListedRawSubreddit } from "../types/reddit";
import { parseSubreddit } from "../util/parseSubreddit";

const fetchSubreddit = async (
  axios: AxiosInstance,
  name: string
): Promise<RedditSubreddit | undefined> => {
  const res = await axios.get<ListedRawSubreddit>(`/r/${name}/about.json`);
  const subreddit = res.data.data;

  return parseSubreddit(subreddit);
};

export const useSubreddit = (subreddit: string | undefined) => {
  const axios = useAxios();
  return useQuery(
    ["subreddit", subreddit],
    () => fetchSubreddit(axios, subreddit!),
    { enabled: !!subreddit }
  );
};
