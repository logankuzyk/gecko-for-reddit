import React from "react";
import { ListRenderItem } from "react-native";
import { Card, Button, Title, Paragraph, Subheading } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { Submission } from "../../types/reddit";
import { Tagline } from "../Tagline";

interface SubmissionCardProps {
  submission: Submission;
}

export const SubmissionCard: React.FC<SubmissionCardProps> = ({
  submission,
}) => {
  const navigation = useNavigation();
  const { title, author, created, id, subreddit } = submission;
  const date = new Date(created * 1000);

  const goToComments = () => {
    navigation.navigate("Comments", { postId: id, subreddit });
  };

  return (
    <Card style={{ marginBottom: 4 }} onPress={goToComments}>
      <Card.Content>
        <Title>{title}</Title>
        <Tagline content={[author, date.toDateString()]} />
      </Card.Content>
    </Card>
  );
};

export const renderItem: ListRenderItem<Submission> = ({ item }) => {
  return <SubmissionCard submission={item} />;
};
