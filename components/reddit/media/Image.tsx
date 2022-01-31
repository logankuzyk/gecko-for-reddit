import React from "react";
import { Image as RNImage } from "react-native";

import { RedditSubmission } from "../../../types/reddit";

interface ImageProps {
  submission: RedditSubmission;
}

export const Image: React.FC<ImageProps> = ({ submission }) => {
  const { url } = submission;

  if (url) {
    return (
      <RNImage source={{ uri: url }} style={{ height: 360, width: "100%" }} />
    );
  } else {
    return <></>;
  }
};
