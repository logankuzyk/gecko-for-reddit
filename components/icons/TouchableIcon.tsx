import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Icon } from "./Icon";
import { IconOptions } from "../../types/app";

interface TouchableIconProps {
  type: IconOptions;
  onPress: () => void;
}

export const TouchableIcon: React.FC<TouchableIconProps> = ({
  type,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Icon type={type} />
    </TouchableOpacity>
  );
};
