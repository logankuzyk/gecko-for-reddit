import React from "react";
import { ListRenderItem } from "react-native";
import { Card, Button, Title, Paragraph, Subheading } from "react-native-paper";

import { Comment } from "../../types/reddit";
import { Tagline } from "../Tagline";

interface CommentCardProps {
  author: string;
  date: Date;
  content: React.ReactNode;
}

export const CommentCard: React.FC<CommentCardProps> = ({
  author,
  date,
  content,
}) => {
  return (
    <Card style={{ marginBottom: 4 }}>
      <Card.Content>
        <Tagline author={author} date={date} />
      </Card.Content>
      <Card.Content>
        <Paragraph>{content}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export const renderItem: ListRenderItem<Comment> = ({ item }) => {
  const date = new Date(item.created * 1000);

  return <CommentCard author={item.author} date={date} content={item.body} />;
};
