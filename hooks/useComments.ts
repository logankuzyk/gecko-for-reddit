import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { parseComments } from "../util/parseComments";
import { useAxios } from "./useAxios";
import {
  Listing,
  RedditComment,
  RedditSubmission,
  MoreChildren,
  ListedRawComment,
  ListedRawSubmission,
} from "../types/reddit";

const fetchComments = async (
  axios: AxiosInstance,
  subreddit: string,
  postId: string
): Promise<[RedditSubmission, Array<RedditComment | MoreChildren>]> => {
  const res = await axios.get<
    [Listing<ListedRawSubmission>, Listing<ListedRawComment>]
  >(`/r/${subreddit}/comments/${postId}/.json`);
  const submissionListing = res.data[0];
  const commentListing = res.data[1];

  const submission = submissionListing.data.children[0].data;
  const rawComments = commentListing.data.children;

  const comments = parseComments(rawComments);

  return [
    {
      type: "submission",
      date: new Date(submission.created * 1000),
      ...submission,
    },
    comments,
  ];
};

export const useComments = (subreddit: string, postId: string) => {
  const axios = useAxios();
  return useQuery(["comments", subreddit, postId], () =>
    fetchComments(axios, subreddit, postId)
  );
};
