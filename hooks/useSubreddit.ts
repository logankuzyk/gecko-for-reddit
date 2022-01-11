import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { useAxios } from "./useAxios";
import {
  Listing,
  RedditSubmission,
  ListedRawSubmission,
} from "../types/reddit";
import { determineSubmissionType } from "../util/determineSubmissionType";

const fetchSubreddit = async (
  axios: AxiosInstance,
  subreddit: string
): Promise<RedditSubmission[]> => {
  const res = await axios.get<Listing<ListedRawSubmission>>(
    `/r/${subreddit}.json`
  );
  const submissions = res.data.data.children;
  return submissions.map((submission) => ({
    type: "submission",
    linkType: determineSubmissionType(submission.data),
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
