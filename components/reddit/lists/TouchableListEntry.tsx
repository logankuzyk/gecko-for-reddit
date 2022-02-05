import React from "react";
import { TouchableOpacity } from "react-native";

interface TouchableListEntryProps {
  children: React.ReactNode;
  onPress: () => void;
}

export const TouchableListEntry: React.FC<TouchableListEntryProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        paddingVertical: 4,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {children}
    </TouchableOpacity>
  );
};
