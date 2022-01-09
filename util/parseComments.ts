import { Comment, ListedRawComment, MoreChildren } from "../types/reddit";

export const parseComments = (
  comments: ListedRawComment[]
): Array<Comment | MoreChildren> => {
  const output: Array<Comment | MoreChildren> = [];
  comments.forEach((item) => {
    if (item.kind === "t1") {
      const replies = item.data.replies
        ? parseComments(item.data.replies.data.children)
        : [];
      const comment: Comment = {
        type: "comment",
        date: new Date(item.data.created * 1000),
        replyTree: replies,
        ...item.data,
      };
      output.push(comment);
    } else {
      const more: MoreChildren = {
        type: "more",
        ...item.data,
      };
      output.push(more);
    }
  });
  return output;
};
