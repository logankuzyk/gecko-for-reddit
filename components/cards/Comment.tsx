import React from "react";
import { View, ListRenderItem } from "react-native";
import { Card, Paragraph } from "react-native-paper";

import { ChildIndent } from "./ChildIndent";
import { Comment, MoreChildren } from "../../types/reddit";
import { Tagline } from "../Tagline";

interface CommentCardProps {
  data: Comment | MoreChildren;
  depth?: number;
}

export const CommentCard: React.FC<CommentCardProps> = ({
  data,
  depth = 0,
}) => {
  if (data.type === "comment") {
    const { author, date, body } = data;
    const child =
      data.replyTree.length > 0 ? (
        <ChildIndent depth={data.depth + 1}>
          <CommentCard data={data.replyTree[0]} />
        </ChildIndent>
      ) : (
        <></>
      );

    return (
      <>
        <View style={{ paddingVertical: 6 }}>
          <Card.Content>
            <Tagline content={[author, date.toDateString()]} />
          </Card.Content>
          <Card.Content>
            <Paragraph>{body}</Paragraph>
          </Card.Content>
        </View>
        {child}
      </>
    );
  } else {
    return (
      //TODO: allow user to expand comments stored in more children object
      <Card.Content>
        <Paragraph>Show More</Paragraph>
      </Card.Content>
    );
  }
};

export const renderItem: ListRenderItem<Comment> = ({ item }) => {
  return <CommentCard data={item} />;
};
