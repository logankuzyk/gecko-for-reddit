import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { useAxios } from "./useAxios";
import { Listing, Submission, ListedRawSubmission } from "../types/reddit";

const fetchSubreddit = async (
  axios: AxiosInstance,
  subreddit: string
): Promise<Submission[]> => {
  const res = await axios.get<Listing<ListedRawSubmission>>(
    `/r/${subreddit}.json`
  );
  const submissions = res.data.data.children;
  return submissions.map((submission) => ({
    type: "submission",
    date: new Date(submission.data.created * 1000),
    ...submission.data,
  }));
};

export const useSubreddit = (subreddit: string) => {
  const axios = useAxios();
  return useQuery(["subreddit", subreddit], () =>
    fetchSubreddit(axios, subreddit)
  );
};
