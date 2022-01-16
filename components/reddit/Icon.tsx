import React from "react";
import { Image, View } from "react-native";
import { Subheading } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";

import { colors } from "../../styles/colors";

interface IconProps {
  type: "user" | "subreddit" | "frontpage" | "all" | "popular";
  uri?: string | null | undefined;
}

const Circle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const height = 32;
  const width = 32;
  const borderRadius = width / 2;

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
      {children}
    </View>
  );
};

export const Icon: React.FC<IconProps> = ({ type, uri }) => {
  const height = 32;
  const width = 32;
  const borderRadius = width / 2;

  const icons = {
    user: "user",
    all: "poll",
    frontpage: "house-user",
    popular: "rocket",
  };

  if (uri) {
    return <Image source={{ uri }} style={{ height, width, borderRadius }} />;
  } else if (type === "subreddit") {
    return (
      <Circle>
        <Subheading>/r/</Subheading>
      </Circle>
    );
  } else if (type === "user") {
    return (
      <Circle>
        <FontAwesome5 solid name="user" />
      </Circle>
    );
  } else if (icons[type]) {
    return (
      <Circle>
        <FontAwesome5 solid name={icons[type]} />
      </Circle>
    );
  } else {
    return <></>;
  }
};
