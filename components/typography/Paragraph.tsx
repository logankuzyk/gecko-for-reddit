import React from "react";
import { Text, TextProps } from "react-native";

export const Paragraph: React.FC<TextProps> = ({ ...props }) => {
  return (
    <Text
      style={{
        fontSize: 14,
        fontWeight: "400",
      }}
      {...props}
    />
  );
};
