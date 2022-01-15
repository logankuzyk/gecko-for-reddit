import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { useAxios } from "./useAxios";
import { useRedditContext } from "../contexts/RedditContext";
import {
  Listing,
  RedditSubmission,
  ListedRawSubmission,
} from "../types/reddit";
import { parseSubmission } from "../util/parseSubmission";

const fetchSubmissions = async (
  axios: AxiosInstance,
  subreddit: string | undefined,
  isLoggedIn: boolean
): Promise<RedditSubmission[]> => {
  const endpoint = subreddit
    ? `/r/${subreddit}.json`
    : isLoggedIn
    ? "/.json"
    : "/r/all.json";

  const res = await axios.get<Listing<ListedRawSubmission>>(endpoint);
  const submissions = res.data.data.children;
  return submissions.map((item) => parseSubmission(item.data));
};

export const useSubmissions = (subreddit: string | undefined) => {
  const axios = useAxios();
  const { isLoggedIn } = useRedditContext();
  return useQuery(["subreddit", subreddit, isLoggedIn], () =>
    fetchSubmissions(axios, subreddit, isLoggedIn)
  );
};
