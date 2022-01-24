import { useMutation } from "react-query";
import { AxiosInstance } from "axios";

import { RedditSubmission, RedditComment } from "../types/reddit";
import { useAxios } from "./useAxios";

const castVote = async (
  axios: AxiosInstance,
  vote: number,
  fullName: string,
  modhash: string
) => {
  const res = axios.post("/api/vote", {
    dir: vote,
    id: fullName,
    uh: modhash,
    rank: 69,
  });

  return res;
};

export const useVote = (thing: RedditSubmission | RedditComment) => {
  const axios = useAxios();
  return useMutation((vote: number) =>
    castVote(axios, vote, thing.name, thing.modhash)
  );
};
