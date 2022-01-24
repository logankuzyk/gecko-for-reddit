import { parseComment } from "./parseComment";
import { parseMore } from "./parseMore";
import { RedditComment, ListedRawComment, MoreChildren } from "../types/reddit";

export const parseComments = (
  comments: ListedRawComment[],
  modhash: string
): Array<RedditComment | MoreChildren> => {
  const output: Array<RedditComment | MoreChildren> = [];
  comments.forEach((item) => {
    if (item.kind === "t1") {
      const comment = parseComment(item.data, modhash);
      output.push(comment);
    } else {
      const more = parseMore(item.data, modhash);
      output.push(more);
    }
  });
  return output;
};
