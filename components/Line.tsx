import React from "react";
import { View } from "react-native";

import { colors } from "../styles/colors";

export const Line: React.FC = () => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: colors.grey["300"],
        marginVertical: 12,
      }}
    />
  );
};
