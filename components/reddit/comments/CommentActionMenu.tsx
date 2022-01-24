import React, { useState } from "react";
import { View, useWindowDimensions } from "react-native";

import { RedditComment } from "../../../types/reddit";
import { colors } from "../../../styles/colors";
import { Upvote } from "../buttons/Upvote";
import { Downvote } from "../buttons/Downvote";
import { Save } from "../buttons/Save";
import { Menu } from "../buttons/Menu";
import { useVote } from "../../../hooks/useVote";

interface CommentActionMenuProps {
  comment: RedditComment;
}

export const CommentActionMenu: React.FC<CommentActionMenuProps> = ({
  comment,
}) => {
  const { mutate: castVote } = useVote(comment);
  const { width } = useWindowDimensions();
  const size = 18;
  const [upvoteToggled, setUpvoteToggled] = useState<boolean>(false);
  const [downvoteToggled, setDownvoteToggled] = useState<boolean>(false);
  const [saveToggled, setSaveToggled] = useState<boolean>(false);

  const handleUpvotePress = () => {
    if (!upvoteToggled) {
      castVote(1);
      setUpvoteToggled(true);
      setDownvoteToggled(false);
    } else {
      castVote(0);
      setUpvoteToggled(false);
    }
  };

  const handleDownvotePress = () => {
    if (!downvoteToggled) {
      castVote(-1);
      setDownvoteToggled(true);
      setUpvoteToggled(false);
    } else {
      castVote(0);
      setDownvoteToggled(false);
    }
  };

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
        <Upvote
          onPress={handleUpvotePress}
          toggled={upvoteToggled}
          size={size}
        />
        <Downvote
          onPress={handleDownvotePress}
          toggled={downvoteToggled}
          size={size}
        />
        <Save onPress={() => {}} toggled={false} size={size} />
        <Menu onPress={() => {}} toggled={false} size={size} />
      </View>
    </View>
  );
};
