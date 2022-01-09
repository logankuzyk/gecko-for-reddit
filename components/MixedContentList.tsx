import React from "react";
import { ListRenderItem } from "react-native";

import { RootComment } from "./cards/RootComment";
import { SubmissionCard } from "./cards/Submission";
import { Submission, Comment, MoreChildren } from "../types/reddit";

export const renderItem: ListRenderItem<
  Submission | Comment | MoreChildren
> = ({ item }) => {
  if (item.type === "submission") {
    return <SubmissionCard submission={item} />;
  } else {
    return <RootComment data={item} />;
  }
};
