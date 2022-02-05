import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import { TouchableIcon } from "../icons/TouchableIcon";
import { ActionDisplay } from "../../types/app";
import { TouchableListEntry } from "../reddit/lists/TouchableListEntry";

export interface SettingsProps {
  type: ActionDisplay;
}

export const Settings: React.FC<SettingsProps> = ({ type }) => {
  const navigation = useNavigation();
  const handlePress = useCallback(() => {
    navigation.navigate("Settings");
  }, []);

  if (type === "drawer") {
    return (
      <TouchableListEntry
        type="settings"
        onPress={handlePress}
        title="Settings"
      />
    );
  } else {
    return <TouchableIcon type="settings" onPress={handlePress} />;
  }
};
