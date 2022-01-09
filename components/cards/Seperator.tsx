import React from "react";
import { View } from "react-native";

interface SeperatorProps {
  height: number;
}
export const Seperator: React.FC<SeperatorProps> = ({ height = 4 }) => {
  return <View style={{ height }} />;
};
