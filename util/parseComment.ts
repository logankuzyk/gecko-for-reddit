import { RedditComment, RawComment } from "../types/reddit";
import { parseComments } from "./parseComments";
import { parseDate } from "./parseDate";
import { parseScore } from "./parseScore";

// Used to parse a singular comment, like on a profile page.
export const parseComment = (comment: RawComment): RedditComment => {
  const replies = comment.replies
    ? parseComments(comment.replies.data.children)
    : [];
  return {
    ...comment,
    type: "comment",
    date: parseDate(comment.created),
    scoreString: parseScore(comment.score),
    replyTree: replies,
  };
};
