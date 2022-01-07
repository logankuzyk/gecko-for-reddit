import React from "react";
import { ListRenderItem } from "react-native";

import { CommentCard } from "./cards/Comment";
import { SubmissionCard } from "./cards/Submission";
import { Submission, Comment } from "../types/reddit";

export const renderItem: ListRenderItem<Submission | Comment> = ({ item }) => {
  if (item.type === "submission") {
    return <SubmissionCard submission={item} />;
  } else {
    return <CommentCard comment={item} />;
  }
};
