import React from "react";
import { ListRenderItem } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { Title } from "../../typography/Title";
import { RedditSubmission } from "../../../types/reddit";
import { Tagline } from "../Tagline";
import { SubmissionContent } from "../SubmissionContent";

interface SubmissionCardProps {
  submission: RedditSubmission;
}

export const SubmissionCard: React.FC<SubmissionCardProps> = ({
  submission,
}) => {
  const navigation = useNavigation();
  const { title, author, id, subreddit, date, linkType } = submission;

  const goToComments = () => {
    navigation.navigate("Comments", { postId: id, subreddit });
  };

  if (linkType !== "self") {
    return (
      <Card onPress={goToComments}>
        <Card.Content>
          <SubmissionContent submission={submission} />
        </Card.Content>
        <Card.Content>
          <Title>{title}</Title>
          <Tagline content={[author, date.toDateString()]} type="submission" />
        </Card.Content>
      </Card>
    );
  } else {
    return (
      <Card onPress={goToComments}>
        <Card.Content>
          <Title>{title}</Title>
        </Card.Content>
        <Card.Content>
          <SubmissionContent submission={submission} />
          <Tagline content={[author, date.toDateString()]} type="submission" />
        </Card.Content>
      </Card>
    );
  }
};

export const renderItem: ListRenderItem<RedditSubmission> = ({ item }) => {
  return <SubmissionCard submission={item} />;
};
