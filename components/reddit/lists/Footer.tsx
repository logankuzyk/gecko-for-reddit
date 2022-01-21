import React from "react";
import { View } from "react-native";

import { Seperator } from "./Seperator";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <View>
      <Seperator />
      <View style={{ height: 96 }} />
    </View>
  );
};
