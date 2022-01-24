import { AxiosInstance } from "axios";
import { useInfiniteQuery } from "react-query";

import { useAxios } from "./useAxios";
import { useRedditContext } from "../contexts/RedditContext";
import {
  Listing,
  RedditSubmission,
  ListedRawSubmission,
  Paginated,
} from "../types/reddit";
import { parseSubmission } from "../util/parseSubmission";

const fetchSubmissions = async (
  axios: AxiosInstance,
  subreddit: string | undefined,
  isLoggedIn: boolean,
  pageParam: string | undefined
): Promise<Paginated<RedditSubmission[]>> => {
  let endpoint = subreddit
    ? `/r/${subreddit}.json`
    : isLoggedIn
    ? "/.json"
    : "/r/all.json";

  if (pageParam) {
    const params = new URLSearchParams();
    params.append("after", pageParam);
    endpoint += `?${params.toString()}`;
  }

  const res = await axios.get<Listing<ListedRawSubmission>>(endpoint);
  const modhash = res.data.data.modhash;
  const submissions = res.data.data.children;
  const { after, before } = res.data.data;
  return {
    data: submissions.map((item) => parseSubmission(item.data, modhash)),
    after,
    before,
  };
};

export const useSubmissions = (subreddit: string | undefined) => {
  const axios = useAxios();
  const { isLoggedIn } = useRedditContext();
  return useInfiniteQuery(
    ["subreddit", subreddit, isLoggedIn],
    ({ pageParam }) =>
      fetchSubmissions(axios, subreddit, isLoggedIn, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.after,
    }
  );
};
