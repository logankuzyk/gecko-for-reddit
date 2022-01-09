import React from "react";
import { Appbar, Button, Text } from "react-native-paper";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export const NavigationHeader: React.FC<NativeStackHeaderProps> = ({
  navigation,
}) => {
  return (
    <Appbar.Header>
      <Appbar.Content title={navigation.getState().routes[0].name} />
    </Appbar.Header>
  );
};
