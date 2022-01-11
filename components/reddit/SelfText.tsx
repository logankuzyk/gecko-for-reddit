import React from "react";
import { View } from "react-native";
import { Paragraph } from "react-native-paper";

import { RedditSubmission } from "../../types/reddit";
import { colors } from "../../styles/colors";

interface SelfTextProps {
  submission: RedditSubmission;
}

export const SelfText: React.FC<SelfTextProps> = ({ submission }) => {
  const { selftext } = submission;

  if (selftext) {
    return (
      <View
        style={{
          padding: 8,
          borderWidth: 1,
          borderRadius: 4,
          backgroundColor: colors.grey["100"],
          borderColor: colors.grey["300"],
        }}
      >
        <Paragraph>{selftext}</Paragraph>
      </View>
    );
  } else {
    return <></>;
  }
};
