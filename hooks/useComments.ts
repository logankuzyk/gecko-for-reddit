import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { useAxios } from "./useAxios";
import {
  Listing,
  Comment,
  Submission,
  MoreChildren,
  ListedRawComment,
  ListedRawSubmission,
} from "../types/reddit";

const fetchComments = async (
  axios: AxiosInstance,
  subreddit: string,
  postId: string
): Promise<[Submission, Comment[]]> => {
  const res = await axios.get<
    [Listing<ListedRawSubmission>, Listing<ListedRawComment>]
  >(`/r/${subreddit}/comments/${postId}/.json`);
  const submissionListing = res.data[0];
  const commentListing = res.data[1];

  const submission = submissionListing.data.children[0].data;
  const rawComments = commentListing.data.children;

  const comments: Comment[] = [];
  let more: MoreChildren;

  rawComments.forEach((item) => {
    if (item.kind === "t1") {
      comments.push({
        type: "comment",
        date: new Date(item.data.created * 1000),
        ...item.data,
      });
    } else {
      more = item.data;
    }
  });

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
