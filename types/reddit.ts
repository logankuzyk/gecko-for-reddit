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
  replies?: Listing<RawComment>;
}

export interface RawComment extends RedditContent {
  parent_id: string; // technically parent fullname
  is_submitter: boolean;
  body: string;
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
  more: MoreChildren;
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

export interface MoreChildren {
  count: number;
  name: string;
  id: string;
  parent_id: string;
  depth: number;
  children: Array<string>;
}

export interface Submission extends RawSubmission {
  type: "submission";
  date: Date;
}

export interface Comment extends RawComment {
  type: "comment";
  date: Date;
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
