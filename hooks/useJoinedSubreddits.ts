import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { useAxios } from "./useAxios";
import { RedditSubreddit, ListedRawSubreddit, Listing } from "../types/reddit";
import { parseSubreddit } from "../util/parseSubreddit";
import { useCurrentUser } from "./useCurrentUser";

const fetchJoinedSubreddits = async (
  axios: AxiosInstance
): Promise<RedditSubreddit[]> => {
  const res = await axios.get<Listing<ListedRawSubreddit>>(`/subreddits/mine`);

  const subreddits = res.data.data.children;

  return subreddits.map((item) => parseSubreddit(item.data));
};

export const useJoinedSubreddits = () => {
  const axios = useAxios();
  const user = useCurrentUser();
  return useQuery(
    ["joinedSubreddits", user.data?.name],
    () => fetchJoinedSubreddits(axios),
    { enabled: !!user.data }
  );
};
