import React from "react";
import { Image, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { RedditSubmission } from "../../../types/reddit";

interface VideoThumbnailProps {
  submission: RedditSubmission;
}

export const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
  submission,
}) => {
  const { thumbnail } = submission;

  if (thumbnail) {
    return (
      <View>
        <View
          style={{
            position: "relative",
          }}
        >
          <Image
            source={{ uri: thumbnail }}
            style={{ height: 360, width: "100%" }}
          />
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.2)",
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome5 color="white" size={32} name="play" />
          </View>
        </View>
      </View>
    );
  } else {
    return <></>;
  }
};
