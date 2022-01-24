import React from "react";
import { View, useWindowDimensions } from "react-native";

interface CommentActionMenuProps {}

export const CommentActionMenu: React.FC<CommentActionMenuProps> = ({}) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{ height: 36, width, backgroundColor: "red", zIndex: 100 }}
    ></View>
  );
};
