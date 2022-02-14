import React from "react";
import { Image } from "react-native";

import { Icon } from "./Icon";
import { colors } from "../../styles/colors";

interface ImageOrIconProps {
  uri: string | undefined | null;
  type: "user" | "subreddit";
}

export const ImageOrIcon: React.FC<ImageOrIconProps> = ({ uri, type }) => {
  const height = 32;
  const width = 32;
  const borderRadius = width / 2;

  if (uri) {
    return (
      <Image
        source={{ uri }}
        style={{
          height,
          width,
          borderRadius,
          backgroundColor: colors.grey[200],
        }}
      />
    );
  } else {
    return <Icon type={type} />;
  }
};
