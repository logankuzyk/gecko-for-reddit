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

  const indentColors = replyColors.slice(0, depth);

  if (depth === 0) {
    return <>{children}</>;
  } else {
    return (
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {indentColors.map((color) => (
          <View
            style={{
              marginLeft: 18,
              width: 2,
              backgroundColor: color,
            }}
          />
        ))}
        {children}
      </View>
    );
  }
};
