import React from "react";
import { Card } from "react-native-paper";

import { Comment, MoreChildren } from "../../types/reddit";
import { CommentCard } from "./Comment";

interface RootCommentProps {
  data: Comment | MoreChildren;
}

export const RootComment: React.FC<RootCommentProps> = ({ data }) => {
  return (
    <Card>
      <CommentCard data={data} />
    </Card>
  );
};
