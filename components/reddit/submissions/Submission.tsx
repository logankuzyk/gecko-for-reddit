import React from "react";
import { ListRenderItem, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Title } from "../../typography/Title";
import { RedditSubmission } from "../../../types/reddit";
import { Tagline } from "../Tagline";
import { SubmissionContent } from "./SubmissionContent";
import { TouchableOpacity } from "react-native-gesture-handler";

interface SubmissionCardProps {
  submission: RedditSubmission;
}

export const SubmissionCard: React.FC<SubmissionCardProps> = ({
  submission,
}) => {
  const navigation = useNavigation();
  const { title, author, id, subreddit, date, linkType, scoreString } =
    submission;
  const tagline = [author, scoreString, date];

  const goToComments = () => {
    navigation.navigate("Comments", { postId: id, subreddit });
  };

  if (linkType !== "self") {
    return (
      <TouchableOpacity
        style={{
          paddingHorizontal: 18,
          paddingVertical: 12,
          backgroundColor: "#FFFFFF",
        }}
        onPress={goToComments}
      >
        <SubmissionContent
          style={{ marginBottom: 8 }}
          submission={submission}
        />
        <Title>{title}</Title>
        <View style={{ marginTop: 6 }}>
          <Tagline content={tagline} type="submission" />
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          paddingHorizontal: 18,
          paddingVertical: 12,
          backgroundColor: "#FFFFFF",
        }}
        onPress={goToComments}
      >
        <Title>{title}</Title>
        <SubmissionContent
          style={{ marginVertical: 8 }}
          submission={submission}
        />
        <View>
          <Tagline content={tagline} type="submission" />
        </View>
      </TouchableOpacity>
    );
  }
};

export const renderItem: ListRenderItem<RedditSubmission> = ({ item }) => {
  return <SubmissionCard submission={item} />;
};
