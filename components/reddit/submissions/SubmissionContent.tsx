import React from "react";
import { View, ViewStyle } from "react-native";

import { RedditSubmission } from "../../../types/reddit";
import { Image } from "../media/Image";
import { SelfText } from "../media/SelfText";
import { VideoThumbnail } from "../media/VideoThumbnail";

export interface SubmissionContent {
  submission: RedditSubmission;
  style?: ViewStyle;
}

export const SubmissionContent: React.FC<SubmissionContent> = ({
  submission,
  style,
}) => {
  // Content handlers will be activated onPress once they're implemented
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
    return (
      <View style={style}>
        <VideoThumbnail submission={submission} />
      </View>
    );
  } else {
    return <></>;
  }
};
