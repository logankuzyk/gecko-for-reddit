import React from "react";
import { Text, TextStyle } from "react-native";

export const Heading: React.FC<TextStyle> = ({ ...props }) => {
  return (
    <Text
      style={{
        fontSize: 16,
        fontWeight: "700",
        marginVertical: 16,
      }}
      {...props}
    />
  );
};
