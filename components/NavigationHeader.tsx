import React from "react";
import { Appbar, Button, Text } from "react-native-paper";
import { StackHeaderProps } from "@react-navigation/stack";

export const NavigationHeader: React.FC<StackHeaderProps> = ({
  navigation,
  options,
}) => {
  return (
    <Appbar.Header>
      <Appbar.Content title={options.headerTitle} />
    </Appbar.Header>
  );
};
