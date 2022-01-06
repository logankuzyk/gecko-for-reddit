import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { useAxios } from "./useAxios";
import { Listing, Submission } from "../types/reddit";

const fetchSubreddit = async (
  axios: AxiosInstance,
  subreddit: string
): Promise<Submission[]> => {
  const res = await axios.get<Listing<Submission>>(`/r/${subreddit}.json`);
  const submissions = res.data.data.children;
  return submissions.map((submission) => submission.data);
};

export const useSubreddit = (subreddit: string) => {
  const axios = useAxios();
  return useQuery(["subreddit", subreddit], () =>
    fetchSubreddit(axios, subreddit)
  );
};
