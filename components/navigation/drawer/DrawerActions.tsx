import React, { useCallback, useMemo } from "react";
import { View, ViewProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Caption } from "../../typography/Caption";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { Icon } from "../../icons/Icon";
import { TouchableListEntry } from "../../reddit/lists/TouchableListEntry";
import { useRedditContext } from "../../../contexts/RedditContext";

export const DrawerActions: React.FC<ViewProps> = ({ ...props }) => {
  const user = useCurrentUser();
  const navigation = useNavigation();
  const { isLoggedIn, promptLogin } = useRedditContext();

  const username = useMemo(
    () => (isLoggedIn && user.data ? user.data.name : ""),
    [user, isLoggedIn]
  );
  const uri = useMemo(
    () => (isLoggedIn && user.data ? user.data.icon_img : ""),
    [user, isLoggedIn]
  );

  const goToProfile = useCallback(
    () => navigation.navigate("Profile", { username }),
    [navigation, username]
  );
  const goToSubreddit = useCallback(
    (subreddit: string) => navigation.navigate("Subreddit", { subreddit }),
    [navigation]
  );
  const handleManageAccounts = useCallback(() => {
    if (isLoggedIn) {
      // open account list modal or something
    } else {
      promptLogin();
    }
  }, []);

  // Actions here should likely have equivelant components to be used in the bottom drawer.
  // Would be a good idea to have a folder for each one so the logic can be split nicely.
  // Would also be cool to be able to re order the items in this list.

  return (
    <View {...props}>
      {isLoggedIn ? (
        <>
          <TouchableListEntry
            onPress={goToProfile}
            title="Profile"
            type="user"
          />
          <TouchableListEntry
            onPress={() => goToSubreddit("")}
            title="Frontpage"
            type="frontpage"
          />
        </>
      ) : (
        <></>
      )}
      <TouchableListEntry
        onPress={() => handleManageAccounts()}
        type="users"
        title={isLoggedIn ? "Accounts" : "Login"}
      />
      <TouchableListEntry
        onPress={() => goToSubreddit("all")}
        type="all"
        title="All"
      />
      <TouchableListEntry
        onPress={() => goToSubreddit("popular")}
        type="popular"
        title="Popular"
      />
    </View>
  );
};
