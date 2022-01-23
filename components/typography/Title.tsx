import React from "react";
import { Text, TextProps } from "react-native";

export const Title: React.FC<TextProps> = ({ ...props }) => {
  return (
    <Text
      style={{
        fontSize: 20,
        fontWeight: "700",
      }}
      {...props}
    />
  );
};
