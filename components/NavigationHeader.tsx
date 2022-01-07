import React from "react";
import { Appbar, Button, Text } from "react-native-paper";
import { DrawerHeaderProps } from "@react-navigation/drawer";

export const NavigationHeader: React.FC<DrawerHeaderProps> = ({
  navigation,
}) => {
  return (
    <Appbar.Header>
      <Button
        onPress={navigation.openDrawer}
        style={{ backgroundColor: "blue" }}
      >
        haii
      </Button>
      <Appbar.Content title={navigation.getState().routes[0].name} />
    </Appbar.Header>
  );
};
