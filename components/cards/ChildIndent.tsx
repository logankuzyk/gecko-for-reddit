import React from "react";
import { View } from "react-native";

interface ChildIndentProps {
  depth: number;
  children: React.ReactNode;
}

export const ChildIndent: React.FC<ChildIndentProps> = ({
  depth,
  children,
}) => {
  return (
    <View
      style={{
        borderLeftWidth: 2,
        marginLeft: 10,
        borderColor: "red",
      }}
    >
      {children}
    </View>
  );
};
