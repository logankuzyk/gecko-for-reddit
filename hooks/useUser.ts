import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { useAxios } from "./useAxios";
import { RedditUser, ListedRawUser } from "../types/reddit";

const fetchUser = async (
  axios: AxiosInstance,
  username: string | undefined
): Promise<RedditUser | undefined> => {
  if (!username) {
    return;
  }

  const res = await axios.get<ListedRawUser>(`/u/${username}/about.json`);
  const user = res.data.data;
  return {
    ...user,
    icon_img: user.icon_img ? user.icon_img.split("?")[0] : "",
    type: "user",
    date: new Date(user.created * 1000),
  };
};

export const useUser = (username: string | undefined) => {
  const axios = useAxios();
  return useQuery(["user", username], () => fetchUser(axios, username));
};
