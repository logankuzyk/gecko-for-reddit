import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";

import { colors } from "../../../styles/colors";

interface MenuProps {
  onPress: () => void;
  toggled: boolean;
  size: number;
}

export const Menu: React.FC<MenuProps> = ({ onPress, toggled, size }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 12 }}>
      <FontAwesome5
        size={size}
        color={toggled ? colors.deepOrange["500"] : colors.grey["500"]}
        name="ellipsis-v"
      />
    </TouchableOpacity>
  );
};
