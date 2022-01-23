import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { colors } from "../../styles/colors";

interface NavigationIconProps {
  onPress: () => void;
  onLongPress: () => void;
  name: string;
  children: React.ReactNode;
  height: number;
  width: number;
}

export const NavigationIcon: React.FC<NavigationIconProps> = ({
  onPress,
  children,
  name,
  height,
  width,
}) => {
  return (
    <View
      //   onPress={onPress}
      style={{
        width,
        height,
        borderRadius: 32,
        borderWidth: 1,
        borderColor: colors.grey["800"],
        backgroundColor: colors.grey["900"],
      }}
    >
      {children}
    </View>
  );
};
