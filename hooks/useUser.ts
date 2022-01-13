import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { useAxios } from "./useAxios";
import { RedditUser, ListedRawUser } from "../types/reddit";
import { parseUser } from "../util/parseUser";

const fetchUser = async (
  axios: AxiosInstance,
  username: string
): Promise<RedditUser | undefined> => {
  const res = await axios.get<ListedRawUser>(`/u/${username}/about.json`);
  const user = res.data.data;

  return parseUser(user);
};

export const useUser = (username: string | undefined) => {
  const axios = useAxios();
  return useQuery(["user", username], () => fetchUser(axios, username!), {
    enabled: !!username,
  });
};
