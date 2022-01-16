import React from "react";
import { View, ViewStyle } from "react-native";

import { RedditSubmission } from "../../types/reddit";
import { Image } from "./Image";
import { SelfText } from "./SelfText";

export interface SubmissionContent {
  submission: RedditSubmission;
  style?: ViewStyle;
}

export const SubmissionContent: React.FC<SubmissionContent> = ({
  submission,
  style,
}) => {
  const { linkType } = submission;

  if (linkType === "image") {
    return (
      <View style={style}>
        <Image submission={submission} />
      </View>
    );
  } else if (linkType === "self") {
    return (
      <View style={style}>
        <SelfText submission={submission} />
      </View>
    );
  } else if (linkType === "video") {
    return <></>;
  } else {
    return <></>;
  }
};
