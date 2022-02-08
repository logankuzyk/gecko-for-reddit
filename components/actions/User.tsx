import React, { useCallback, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";

import { useCurrentUser } from "../../hooks/useCurrentUser";
import { TouchableIcon } from "../icons/TouchableIcon";
import { ActionDisplay } from "../../types/app";
import { TouchableListEntry } from "../reddit/lists/TouchableListEntry";

export interface UserProps {
  type: ActionDisplay;
  username?: string;
  uri?: string | null;
}

export const User: React.FC<UserProps> = ({ type, uri, username }) => {
  const navigation = useNavigation();
  const user = useCurrentUser();
  const finalUsername = useMemo(
    () => (username ? username : user.data ? user.data.name : "spez"),
    []
  );
  const handlePress = useCallback(() => {
    navigation.navigate("Profile", { username: finalUsername });
  }, [username, user.data]);

  if (type === "drawer") {
    return (
      <TouchableListEntry
        type="user"
        uri={uri}
        onPress={handlePress}
        title={finalUsername}
      />
    );
  } else {
    // Prompt for user?
    return <TouchableIcon type="user" onPress={handlePress} />;
  }
};
