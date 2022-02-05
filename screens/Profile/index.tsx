import React from "react";
import { ProfileScreenController } from "./controller";

import { RootStackScreenProps } from "../../types/navigation";

const SettingsScreenProvider: React.FC<RootStackScreenProps<"Profile">> = ({
  navigation,
  route,
}) => {
  const { username } = route.params;

  return (
    <ProfileScreenController navigation={navigation} username={username} />
  );
};

export default SettingsScreenProvider;
