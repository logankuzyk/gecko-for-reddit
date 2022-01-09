export interface Listing<T> {
  kind: "Listing";
  data: {
    after?: string | null;
    before?: string | null;
    modhash?: string;
    children: Array<T>;
  };
}

export interface RedditContent {
  created_utc: number;
  created: number;
  id: string;
  name: string;
  subreddit: string;
  user_reports: string[];
  saved: boolean;
  gilded: number;
  hidden: boolean;
  upvote_ratio: number;
  score: number;
  author: string;
  permalink: string;
  url: string;
  spoiler: boolean;
  archived: boolean;
}

export interface RawComment extends RedditContent {
  parent_id: string; // technically parent fullname
  is_submitter: boolean;
  body: string;
  depth: number;
  replies?: Listing<ListedRawComment>;
}

export type ListedRawComment =
  | {
      kind: "t1";
      data: CommentType["t1"];
    }
  | {
      kind: "more";
      data: CommentType["more"];
    };

export type CommentType = {
  t1: RawComment;
  more: RawMoreChildren;
};

export interface RawSubmission extends RedditContent {
  title: string;
  domain: string;
  is_self: boolean;
  locked: boolean;
  selftext?: string;
  is_original_content: boolean;
}

export interface ListedRawSubmission {
  kind: "t3";
  data: RawSubmission;
}

export interface RawMoreChildren {
  count: number;
  name: string;
  id: string;
  parent_id: string;
  depth: number;
  children: Array<string>;
}

export interface MoreChildren extends RawMoreChildren {
  type: "more";
}

export interface Submission extends RawSubmission {
  type: "submission";
  date: Date;
}

export interface Comment extends RawComment {
  type: "comment";
  date: Date;
  replyTree: Array<Comment | MoreChildren>;
}

export interface ReplyableContent extends RedditContent {
  //   approve(): () => void;
  //   blockAuthor(): () => void;
  //   ignoreReports(): () => void;
  //   remove(options?: { spam?: boolean }): () => void;
  //   reply(text: string): () => void;
  //   report(options?: { reason?: string }): () => void;
  //   unignoreReports(): () => void;
}
