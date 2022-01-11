import React from "react";

import { View } from "react-native";
import { Caption, Subheading } from "react-native-paper";

interface TaglineProps {
  content: Array<string>;
  type: "submission" | "comment";
}

export const Tagline: React.FC<TaglineProps> = ({ content, type }) => {
  const TextComponent = type === "comment" ? Caption : Subheading;

  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {content.map((item, index, array) => {
        if (index !== array.length - 1) {
          return (
            <TextComponent key={index.toString()}>{item} • </TextComponent>
          );
        } else {
          return <TextComponent key={index.toString()}>{item}</TextComponent>;
        }
      })}
    </View>
  );
};
