export interface Listing<T> {
  kind: "Listing";
  data: {
    after?: string | null;
    before?: string | null;
    modhash?: string;
    children: Array<{ kind: string; data: T }>;
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
}

export interface RawSubmission extends RedditContent {
  title: string;
  domain: string;
  is_self: boolean;
  locked: boolean;
  selftext?: string;
  is_original_content: boolean;
}

export interface Submission extends RawSubmission {
  type: "submission";
}

export interface Comment extends RawComment {
  type: "comment";
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
