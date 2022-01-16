import React from "react";
import { Chip } from "react-native-paper";

interface FlairProps {
  children: React.ReactNode;
}
export const Flair: React.FC<FlairProps> = ({ children }) => {
  return <Chip>{children}</Chip>;
};
