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
    const child =
      data.replyTree.length > 0 ? (
        <ChildIndent depth={data.depth + 1}>
          <Comment data={data.replyTree[0]} />
        </ChildIndent>
      ) : (
        <></>
      );

    return (
      <View style={{ paddingHorizontal: 18 }}>
        <View style={{ marginBottom: 8 }}>
          <View style={{ marginTop: 8 }}>
            <Tagline content={[author, date.toDateString()]} type="comment" />
          </View>
          <View style={{ marginTop: 4 }}>
            <Paragraph>{body}</Paragraph>
          </View>
        </View>
        {child}
      </View>
    );
  } else {
    return (
      //TODO: allow user to expand comments stored in more children object
      <View style={{ paddingHorizontal: 18, paddingVertical: 8 }}>
        <Paragraph>Show More</Paragraph>
      </View>
    );
  }
};

export const renderItem: ListRenderItem<RedditComment> = ({ item }) => {
  return <Comment data={item} />;
};
