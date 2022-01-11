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
  spoiler: boolean;
  archived: boolean;
  stickied: boolean;
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

export type PreviewEntry = {
  url: string;
  width: number;
  height: number;
};

export interface RawSubmission extends RedditContent {
  title: string;
  domain: string;
  is_self: boolean;
  locked: boolean;
  selftext?: string;
  is_original_content: boolean;
  clicked: boolean;
  thumbnail: string;
  is_video: boolean;
  preview?: {
    images: [source: PreviewEntry, resolutions: PreviewEntry[]];
  };
  url?: string;
}

export interface RawSubreddit {
  title: string;
  subscribers: number;
  header_img: string | null;
  primary_color: string;
  accounts_active: number;
  community_icon: string | null;
  public_description: string;
  created: number;
  subreddit_type: "public" | "private";
  spoilers_enabled: boolean;
  emojis_enabled: boolean;
  user_has_favorited: boolean;
  submit_text: string;
  all_original_content: boolean;
  allow_images: boolean;
  allow_videos: boolean;
  user_is_banned: boolean;
  user_is_muted: boolean;
  display_name: string;
}

export interface ListedRawSubreddit {
  kind: "t5";
  data: RawSubreddit;
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

export interface RedditSubmission extends RawSubmission {
  type: "submission";
  linkType: RedditLinkType;
  date: Date;
}

export interface RedditComment extends RawComment {
  type: "comment";
  date: Date;
  replyTree: Array<RedditComment | MoreChildren>;
}

export type RedditLinkType = "self" | "video" | "image" | "external";

export interface RedditSubreddit extends RawSubreddit {
  type: "subreddit";
  date: Date;
}
