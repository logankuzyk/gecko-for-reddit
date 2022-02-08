import React, { useCallback, useMemo } from "react";
import { View, ViewProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Subreddit } from "../../actions/Subreddit";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
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
  const handleManageAccounts = useCallback(() => {
    if (isLoggedIn) {
      // open account list modal or something
    } else {
      promptLogin();
    }
  }, []);

  // Would be cool to be able to re order the items in this list.

  return (
    <View {...props}>
      {isLoggedIn ? (
        <>
          <TouchableListEntry
            onPress={goToProfile}
            title="Profile"
            type="user"
          />
          <Subreddit type="drawer" name="frontpage" />
        </>
      ) : (
        <></>
      )}
      <TouchableListEntry
        onPress={() => handleManageAccounts()}
        type="users"
        title={isLoggedIn ? "Accounts" : "Login"}
      />
      <Subreddit type="drawer" name="all" />
      <Subreddit type="drawer" name="popular" />
    </View>
  );
};
