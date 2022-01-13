import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { useAxios } from "./useAxios";
import { RedditSubreddit, ListedRawSubreddit, Listing } from "../types/reddit";
import { parseSubreddit } from "../util/parseSubreddit";

const fetchResults = async (
  axios: AxiosInstance,
  query: string
): Promise<RedditSubreddit[]> => {
  const params = new URLSearchParams();
  params.append("q", query);
  const res = await axios.get<Listing<ListedRawSubreddit>>(
    `/subreddits/search?${params.toString()}`
  );

  const subreddits = res.data.data.children;

  return subreddits
    .filter(
      (subreddit) =>
        subreddit.data.display_name.toLowerCase() !== query.toLowerCase()
    )
    .map(({ data: subreddit }) => parseSubreddit(subreddit));
};

export const useSearch = (query: string | undefined) => {
  const axios = useAxios();
  return useQuery(["search", query], () => fetchResults(axios, query!), {
    enabled: !!query,
  });
};
