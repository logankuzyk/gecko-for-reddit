import React from "react";
import { View, ListRenderItem } from "react-native";

import { Paragraph } from "../../typography/Paragraph";
import { ChildIndent } from "./ChildIndent";
import { RedditComment, MoreChildren } from "../../../types/reddit";
import { Tagline } from "../Tagline";

interface CommentProps {
  data: RedditComment | MoreChildren;
  depth?: number;
}

export const Comment: React.FC<CommentProps> = ({ data, depth = 0 }) => {
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
            <Comment data={comment} />
          </ChildIndent>
        ))}
      </View>
    );
  } else {
    return (
      //TODO: allow user to expand comments stored in more children object
      <View style={{ paddingLeft: 18, paddingVertical: 8 }}>
        <Paragraph>Show More</Paragraph>
      </View>
    );
  }
};

export const renderItem: ListRenderItem<RedditComment> = ({ item }) => {
  return <Comment data={item} />;
};
