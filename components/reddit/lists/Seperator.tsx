import React from "react";
import { View, ViewStyle } from "react-native";

import { colors } from "../../../styles/colors";

export const Seperator: React.FC<ViewStyle> = ({ ...props }) => {
  return (
    <View
      style={{
        display: "flex",
        height: 1,
        backgroundColor: colors.grey["200"],
        ...props,
      }}
    />
  );
};
