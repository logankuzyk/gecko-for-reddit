import React from "react";
import { Text, TextProps } from "react-native";

import { colors } from "../../styles/colors";

export const Caption: React.FC<TextProps> = ({ ...props }) => {
  return (
    <Text
      {...props}
      style={{
        fontSize: 12,
        fontWeight: "200",
        color: colors.grey["500"],
      }}
    />
  );
};
