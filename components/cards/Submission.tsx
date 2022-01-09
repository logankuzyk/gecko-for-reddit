import React from "react";
import { ListRenderItem } from "react-native";
import { Card, Title } from "react-native-paper";
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
  const { title, author, id, subreddit, date } = submission;

  const goToComments = () => {
    navigation.navigate("Comments", { postId: id, subreddit });
  };

  return (
    <Card onPress={goToComments}>
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
