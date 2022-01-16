import { RawUser, RedditUser } from "../types/reddit";
import { parseDate } from "./parseDate";

export const parseUser = (user: RawUser): RedditUser => {
  return {
    ...user,
    icon_img: user.icon_img ? user.icon_img.split("?")[0] : "",
    type: "user",
    date: parseDate(user.created),
  };
};
