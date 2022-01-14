import { RedditComment, RawComment } from "../types/reddit";
import { parseComments } from "./parseComments";

// Used to parse a singular comment, like on a profile page.
export const parseComment = (comment: RawComment): RedditComment => {
  const replies = comment.replies
    ? parseComments(comment.replies.data.children)
    : [];
  return {
    type: "comment",
    date: new Date(comment.created * 1000),
    replyTree: replies,
    ...comment,
  };
};
