import React from "react";
import { View } from "react-native";

import { RedditComment, MoreChildren } from "../../../types/reddit";
import { Comment } from "./Comment";

interface RootCommentProps {
  data: RedditComment | MoreChildren;
}

export const RootComment: React.FC<RootCommentProps> = ({ data }) => {
  const submissionFullname = data.parent_id;

  return (
    <View style={{ paddingRight: 18 }}>
      <Comment data={data} submissionFullname={submissionFullname} />
    </View>
  );
};
