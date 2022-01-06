import React from "react";
import { ListRenderItem } from "react-native";
import { Card, Button, Title, Paragraph, Subheading } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { Submission } from "../../types/reddit";
import { Tagline } from "../Tagline";

interface SubmissionCardProps {
  title: string;
  author: string;
  date: Date;
  content: React.ReactNode;
  postId: string;
  subreddit: string;
}

export const SubmissionCard: React.FC<SubmissionCardProps> = ({
  title,
  author,
  date,
  content,
  postId,
  subreddit,
}) => {
  const navigation = useNavigation();

  const goToComments = () => {
    navigation.navigate("Comments", { postId, subreddit });
  };

  return (
    <Card style={{ marginBottom: 4 }} onPress={goToComments}>
      <Card.Content>
        <Title>{title}</Title>
        <Tagline content={[author, date.toDateString()]} />
      </Card.Content>
      {/* <Card.Content>{content}</Card.Content> */}
    </Card>
  );
};

export const renderItem: ListRenderItem<Submission> = ({ item }) => {
  const date = new Date(item.created * 1000);

  return (
    <SubmissionCard
      title={item.title}
      author={item.author}
      date={date}
      content={""}
      postId={item.id}
      subreddit={item.subreddit}
    />
  );
};
