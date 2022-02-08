import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

interface SubmissionContainerProps {
  onPress: () => void;
}

export const SubmissionContainer: React.FC<SubmissionContainerProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 18,
        paddingVertical: 12,
        backgroundColor: "#FFFFFF",
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};
