import React from "react";

import { View } from "react-native";
import { Chip } from "react-native-paper";

interface TaglineProps {
  author: string;
  date: Date;
}

export const Tagline: React.FC<TaglineProps> = ({ author, date }) => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <Chip>{author}</Chip>
      <Chip>{date.toDateString()}</Chip>
    </View>
  );
};
