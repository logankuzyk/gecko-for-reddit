import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";

import { colors } from "../../../styles/colors";

interface DownvoteProps {
  onPress: () => void;
  toggled: boolean;
  size: number;
}

export const Downvote: React.FC<DownvoteProps> = ({
  onPress,
  toggled,
  size,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 12 }}>
      <FontAwesome5
        size={size}
        color={toggled ? colors.blue["500"] : colors.grey["500"]}
        name="arrow-down"
      />
    </TouchableOpacity>
  );
};
