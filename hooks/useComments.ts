import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { useAxios } from "./useAxios";
import {
  Listing,
  Comment,
  Submission,
  RawComment,
  RawSubmission,
} from "../types/reddit";

const fetchComments = async (
  axios: AxiosInstance,
  subreddit: string,
  postId: string
): Promise<[Submission, Comment[]]> => {
  const res = await axios.get<[Listing<RawSubmission>, Listing<RawComment>]>(
    `/r/${subreddit}/comments/${postId}/.json`
  );
  const submission = res.data[0].data.children[0].data;
  const comments = res.data[1].data.children;
  return [
    { type: "submission", ...submission },
    comments.map((comment) => ({ type: "comment", ...comment.data })),
  ];
};

export const useComments = (subreddit: string, postId: string) => {
  const axios = useAxios();
  return useQuery(["comments", subreddit, postId], () =>
    fetchComments(axios, subreddit, postId)
  );
};
