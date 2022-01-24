import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";

import { colors } from "../../../styles/colors";

interface SaveProps {
  onPress: () => void;
  toggled: boolean;
  size: number;
}

export const Save: React.FC<SaveProps> = ({ onPress, toggled, size }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 12 }}>
      <FontAwesome5
        size={size}
        color={toggled ? colors.yellow["500"] : colors.grey["500"]}
        name="star"
        solid={toggled}
      />
    </TouchableOpacity>
  );
};
