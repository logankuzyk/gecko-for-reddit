import React from "react";
import { View } from "react-native";

import { Caption } from "../typography/Caption";

interface TaglineProps {
  content: Array<string>;
  type: "submission" | "comment";
}

export const Tagline: React.FC<TaglineProps> = ({ content }) => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {content.map((item, index, array) => {
        if (index !== array.length - 1) {
          return <Caption key={index.toString()}>{item} • </Caption>;
        } else {
          return <Caption key={index.toString()}>{item}</Caption>;
        }
      })}
    </View>
  );
};
