import React from "react";
import { ListRenderItem } from "react-native";

import { RootComment } from "../comments/RootComment";
import { Submission } from "../submissions/Submission";
import {
  RedditSubmission,
  RedditComment,
  MoreChildren,
} from "../../../types/reddit";

export const renderItem: ListRenderItem<
  RedditSubmission | RedditComment | MoreChildren
> = ({ item }) => {
  if (item.type === "submission") {
    return <Submission submission={item} />;
  } else {
    return <RootComment data={item} />;
  }
};
