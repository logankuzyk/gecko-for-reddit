import React from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootDrawerScreenController } from "./controller";

const SettingsScreenProvider: React.FC<DrawerContentComponentProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView>
      <RootDrawerScreenController navigation={navigation} />
    </SafeAreaView>
  );
};

export default SettingsScreenProvider;
