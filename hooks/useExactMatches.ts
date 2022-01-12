import { RedditSubreddit, RedditUser } from "../types/reddit";
import { useSubreddit } from "./useSubreddit";
import { useUser } from "./useUser";

export const useExactMatches = (
  query: string | undefined
): Array<RedditUser | RedditSubreddit> => {
  const matches = [];

  const subreddit = useSubreddit(query);
  const user = useUser(query);

  if (subreddit.isSuccess && subreddit.data) {
    matches.push(subreddit.data);
  }

  if (user.isSuccess && user.data) {
    matches.push(user.data);
  }

  return matches;
};
