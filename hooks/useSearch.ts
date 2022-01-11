import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { useAxios } from "./useAxios";
import { RedditSubreddit, ListedRawSubreddit, Listing } from "../types/reddit";

const fetchResults = async (
  axios: AxiosInstance,
  query: string | undefined
): Promise<RedditSubreddit[]> => {
  if (!query) {
    return [];
  }

  const params = new URLSearchParams();
  params.append("q", query);
  const res = await axios.get<Listing<ListedRawSubreddit>>(
    `/subreddits/search?${params.toString()}`
  );

  const subreddits = res.data.data.children;

  return subreddits.map((subreddit) => ({
    ...subreddit.data,
    type: "subreddit",
    date: new Date(subreddit.data.created * 1000),
    community_icon: subreddit.data.community_icon
      ? subreddit.data.community_icon.split("?")[0]
      : "",
  }));
};

export const useSearch = (query: string | undefined) => {
  const axios = useAxios();
  return useQuery(["search", query], () => fetchResults(axios, query));
};
