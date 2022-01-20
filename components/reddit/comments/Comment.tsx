import React from "react";
import { View } from "react-native";

import { Paragraph } from "../../typography/Paragraph";
import { ChildIndent } from "./ChildIndent";
import { RedditComment, MoreChildren } from "../../../types/reddit";
import { Tagline } from "../Tagline";
import { LoadMoreChildren } from "./LoadMoreChildren";

interface CommentProps {
  data: RedditComment | MoreChildren;
  submissionFullname: string;
  depth?: number;
}

export const Comment: React.FC<CommentProps> = ({
  data,
  submissionFullname,
}) => {
  if (data.type === "comment") {
    const { author, date, body } = data;

    return (
      <View key={data.id} style={{ paddingLeft: 18 }}>
        <View style={{ marginBottom: 8 }}>
          <View style={{ marginTop: 8 }}>
            <Tagline content={[author, date]} type="comment" />
          </View>
          <View style={{ marginTop: 4 }}>
            <Paragraph>{body}</Paragraph>
          </View>
        </View>
        {data.replyTree.map((comment) => (
          <ChildIndent depth={comment.depth + 1}>
            <Comment data={comment} submissionFullname={submissionFullname} />
          </ChildIndent>
        ))}
      </View>
    );
  } else {
    return (
      <LoadMoreChildren
        submissionFullname={submissionFullname}
        moreChildren={data}
      />
    );
  }
};
