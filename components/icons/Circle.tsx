import React from "react";
import { View } from "react-native";

import { colors } from "../../styles/colors";

export const Circle: React.FC = ({ children }) => {
  const height = 32;
  const width = 32;
  const borderRadius = width / 2;

  return (
    <View
      style={{
        height,
        width,
        borderRadius,
        backgroundColor: colors.grey[200],
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </View>
  );
};
