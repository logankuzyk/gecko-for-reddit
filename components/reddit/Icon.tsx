import React from "react";
import { Image, View } from "react-native";
import { Subheading } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";

import { colors } from "../../styles/colors";

interface IconProps {
  type: "user" | "subreddit";
  uri: string | null | undefined;
}

export const Icon: React.FC<IconProps> = ({ type, uri }) => {
  const height = 42;
  const width = 42;
  const borderRadius = width / 2;

  if (uri) {
    return <Image source={{ uri }} style={{ height, width, borderRadius }} />;
  } else if (type === "subreddit") {
    return (
      <View
        style={{
          height,
          width,
          borderRadius,
          backgroundColor: colors.grey["300"],
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Subheading>/r/</Subheading>
      </View>
    );
  } else if (type === "user") {
    return <FontAwesome5 name="user" />;
  } else {
    return <></>;
  }
};
