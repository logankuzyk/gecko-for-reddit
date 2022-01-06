import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { useAxios } from "./useAxios";
import { Listing, Comment } from "../types/reddit";

const fetchComments = async (
  axios: AxiosInstance,
  subreddit: string,
  postId: string
): Promise<Comment[]> => {
  const res = await axios.get<Array<Listing<Comment>>>(
    `/r/${subreddit}/comments/${postId}/.json`
  );
  const comments = res.data[1].data.children;
  return comments.map((comments) => comments.data);
};

export const useComments = (subreddit: string, postId: string) => {
  const axios = useAxios();
  return useQuery(["comments", subreddit, postId], () =>
    fetchComments(axios, subreddit, postId)
  );
};
