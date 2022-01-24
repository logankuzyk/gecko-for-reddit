import React from "react";
import { View, useWindowDimensions } from "react-native";

import { RedditComment } from "../../../types/reddit";
import { colors } from "../../../styles/colors";
import { Upvote } from "../buttons/Upvote";
import { Downvote } from "../buttons/Downvote";
import { Save } from "../buttons/Save";
import { Menu } from "../buttons/Menu";

interface CommentActionMenuProps {
  comment: RedditComment;
}

export const CommentActionMenu: React.FC<CommentActionMenuProps> = ({
  comment,
}) => {
  const { width } = useWindowDimensions();
  const size = 18;

  return (
    <View
      style={{
        height: 48,
        width,
        backgroundColor: colors.grey["200"],
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Upvote onPress={() => {}} toggled={false} size={size} />
        <Downvote onPress={() => {}} toggled={false} size={size} />
        <Save onPress={() => {}} toggled={false} size={size} />
        <Menu onPress={() => {}} toggled={false} size={size} />
      </View>
    </View>
  );
};
