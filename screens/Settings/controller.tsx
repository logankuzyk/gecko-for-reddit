import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";

import { SettingsScreenView } from "./view";
import { RootStackParamList } from "../../types/navigation";

interface SettingsScreenControllerProps {
  navigation: StackNavigationProp<RootStackParamList, "Settings">;
}

export const SettingsScreenController: React.FC<
  SettingsScreenControllerProps
> = ({ navigation }) => {
  return <SettingsScreenView />;
};
