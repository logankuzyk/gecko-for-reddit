import { AxiosInstance } from "axios";
import { useQuery } from "react-query";

import { useAxios } from "./useAxios";
import { RedditSubreddit, ListedRawSubreddit, Listing } from "../types/reddit";
import { parseSubreddit } from "../util/parseSubreddit";
import { useCurrentUser } from "./useCurrentUser";

const fetchJoinedSubreddits = async (
  axios: AxiosInstance
): Promise<RedditSubreddit[]> => {
  const res = await axios.get<Listing<ListedRawSubreddit>>(
    `/subreddits/mine/subscriber?show=all&limit=100`
  );

  const subreddits = res.data.data.children;

  return subreddits
    .sort((a, b) => {
      if (a.data.display_name < b.data.display_name) {
        return -1;
      } else if (a.data.display_name > b.data.display_name) {
        return 1;
      } else {
        return 0;
      }
    })
    .map((item) => parseSubreddit(item.data));
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
