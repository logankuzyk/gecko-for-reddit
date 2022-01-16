import React from "react";
import { View } from "react-native";

import { isColorWeight } from "../../../util/isColorWeight";
import { colors } from "../../../styles/colors";

interface ChildIndentProps {
  depth: number;
  children: React.ReactNode;
}

export const ChildIndent: React.FC<ChildIndentProps> = ({
  depth,
  children,
}) => {
  const colorId = (depth * 100 + 100).toString();

  const color = isColorWeight(colorId) ? colors.green[colorId] : "#FFFFFF";

  return (
    <View
      style={{
        borderLeftWidth: 2,
        marginRight: 12,
        borderColor: color,
      }}
    >
      {children}
    </View>
  );
};
