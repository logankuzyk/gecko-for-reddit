import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { useAxios } from "./useAxios";
import { SubredditList, ThingToLoad } from "../types/reddit";

const fetchResults = async (
  axios: AxiosInstance,
  query: string
): Promise<Array<ThingToLoad>> => {
  const params = new URLSearchParams();
  params.append("query", query);
  const res = await axios.get<SubredditList>(
    `/api/search_reddit_names?${params.toString()}`
  );

  const subreddits = res.data.names;

  return subreddits.map((name) => ({
    type: "subreddit",
    name,
  }));
};

export const useSearch = (query: string | undefined) => {
  const axios = useAxios();
  return useQuery(["search", query], () => fetchResults(axios, query!), {
    enabled: !!query,
  });
};
