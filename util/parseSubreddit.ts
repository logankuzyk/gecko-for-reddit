import { RawSubreddit, RedditSubreddit } from "../types/reddit";
import { parseDate } from "./parseDate";

export const parseSubreddit = (subreddit: RawSubreddit): RedditSubreddit => {
  return {
    ...subreddit,
    type: "subreddit",
    date: parseDate(subreddit.created),
    community_icon: subreddit.community_icon
      ? subreddit.community_icon.split("?")[0]
      : "",
  };
};
