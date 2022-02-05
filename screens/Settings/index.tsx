import React from "react";
import { SettingsScreenController } from "./controller";

import { RootStackScreenProps } from "../../types/navigation";

const SettingsScreenProvider: React.FC<RootStackScreenProps<"Settings">> = ({
  navigation,
  route,
}) => {
  return <SettingsScreenController navigation={navigation} />;
};

export default SettingsScreenProvider;
