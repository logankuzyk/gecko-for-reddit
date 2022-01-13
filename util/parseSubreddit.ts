import { RawSubreddit, RedditSubreddit } from "../types/reddit";

export const parseSubreddit = (subreddit: RawSubreddit): RedditSubreddit => {
  return {
    ...subreddit,
    type: "subreddit",
    date: new Date(subreddit.created * 1000),
    community_icon: subreddit.community_icon
      ? subreddit.community_icon.split("?")[0]
      : "",
  };
};
