import React from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

import { RootDrawerScreenController } from "./controller";

const SettingsScreenProvider: React.FC<DrawerContentComponentProps> = ({
  navigation,
}) => {
  return <RootDrawerScreenController />;
};

export default SettingsScreenProvider;
