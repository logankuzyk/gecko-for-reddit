import React from "react";
import { View } from "react-native";

import { colors } from "../../../styles/colors";

interface ChildIndentProps {
  depth: number;
  children: React.ReactNode;
}

export const ChildIndent: React.FC<ChildIndentProps> = ({
  depth,
  children,
}) => {
  const replyColors = [
    colors.purple["500"],
    colors.indigo["500"],
    colors.green["500"],
    colors.amber["500"],
    colors.deepOrange["500"],
    colors.red["500"],
  ];

  const trueDepth = depth - 2;

  const color =
    trueDepth < replyColors.length
      ? replyColors[trueDepth]
      : replyColors[trueDepth % replyColors.length];

  return (
    <View
      style={{
        borderLeftWidth: 2,
        borderColor: color,
      }}
    >
      {children}
    </View>
  );
};
