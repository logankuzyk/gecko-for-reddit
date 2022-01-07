import React from "react";
import { ListRenderItem } from "react-native";
import { Card, Button, Title, Paragraph, Subheading } from "react-native-paper";

import { Comment } from "../../types/reddit";
import { Tagline } from "../Tagline";

interface CommentCardProps {
  comment: Comment;
}

export const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  const date = new Date(comment.created * 1000);

  return (
    <Card style={{ marginBottom: 4 }}>
      <Card.Content>
        <Tagline content={[comment.author, date.toDateString()]} />
      </Card.Content>
      <Card.Content>
        <Paragraph>{comment.body}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export const renderItem: ListRenderItem<Comment> = ({ item }) => {
  return <CommentCard comment={item} />;
};
