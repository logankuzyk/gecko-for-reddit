import { RawUser, RedditUser } from "../types/reddit";

export const parseUser = (user: RawUser): RedditUser => {
  return {
    ...user,
    icon_img: user.icon_img ? user.icon_img.split("?")[0] : "",
    type: "user",
    date: new Date(user.created * 1000),
  };
};
