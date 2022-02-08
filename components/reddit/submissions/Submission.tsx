import React, { useCallback } from "react";
import { ListRenderItem, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SubmissionContainer } from "./SubmissionContainer";
import { Title } from "../../typography/Title";
import { RedditSubmission } from "../../../types/reddit";
import { Tagline } from "../Tagline";
import { SubmissionContent } from "./SubmissionContent";

interface SubmissionCardProps {
  submission: RedditSubmission;
}

export const Submission: React.FC<SubmissionCardProps> = ({ submission }) => {
  const navigation = useNavigation();
  const { title, author, id, subreddit, date, linkType, scoreString } =
    submission;
  const tagline = [author, scoreString, date];

  const goToComments = useCallback(() => {
    navigation.navigate("Comments", { postId: id, subreddit });
  }, [id, subreddit]);

  return (
    <SubmissionContainer onPress={goToComments}>
      {linkType !== "self" ? (
        <>
          <SubmissionContent
            style={{ marginBottom: 8 }}
            submission={submission}
          />
          <Title>{title}</Title>
          <View style={{ marginTop: 6 }}>
            <Tagline content={tagline} type="submission" />
          </View>
        </>
      ) : (
        <>
          <Title>{title}</Title>
          <SubmissionContent
            style={{ marginVertical: 8 }}
            submission={submission}
          />
          <View>
            <Tagline content={tagline} type="submission" />
          </View>
        </>
      )}
    </SubmissionContainer>
  );
};

export const renderItem: ListRenderItem<RedditSubmission> = ({ item }) => {
  return <Submission submission={item} />;
};
