import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { useAxios } from "./useAxios";
import { RawUser, RedditUser } from "../types/reddit";
import { useRedditContext } from "../contexts/RedditContext";
import { parseUser } from "../util/parseUser";

const fetchCurrentUser = async (axios: AxiosInstance): Promise<RedditUser> => {
  const res = await axios.get<RawUser>(`/api/v1/me`);

  return parseUser(res.data);
};

export const useCurrentUser = () => {
  const axios = useAxios();
  const { isLoggedIn, accessCode } = useRedditContext();
  return useQuery(["currentUser", accessCode], () => fetchCurrentUser(axios), {
    enabled: !!isLoggedIn,
  });
};
