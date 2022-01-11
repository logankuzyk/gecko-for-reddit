import React from "react";
import { ListRenderItem } from "react-native";
import { Card, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { RedditSubmission } from "../../../types/reddit";
import { Tagline } from "../Tagline";
import { ContentComponent } from "../ContentComponent";

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
          <ContentComponent submission={submission} />
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
          <ContentComponent submission={submission} />
          <Tagline content={[author, date.toDateString()]} type="submission" />
        </Card.Content>
      </Card>
    );
  }
};

export const renderItem: ListRenderItem<RedditSubmission> = ({ item }) => {
  return <SubmissionCard submission={item} />;
};
