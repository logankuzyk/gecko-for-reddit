import React, { useCallback, useMemo } from "react";
import { View, ViewProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Caption } from "../../typography/Caption";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { Icon } from "../../reddit/Icon";
import { TouchableListEntry } from "../../TouchableListEntry";
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
          <TouchableListEntry onPress={goToProfile}>
            <Icon type="user" />
            <Caption>Profile</Caption>
          </TouchableListEntry>
          <TouchableListEntry onPress={() => goToSubreddit("")}>
            <Icon type="frontpage" />
            <Caption>Frontpage</Caption>
          </TouchableListEntry>
        </>
      ) : (
        <></>
      )}
      <TouchableListEntry onPress={() => handleManageAccounts()}>
        <Icon type="users" />
        <Caption>{isLoggedIn ? "Accounts" : "Login"}</Caption>
      </TouchableListEntry>
      <TouchableListEntry onPress={() => goToSubreddit("all")}>
        <Icon type="all" />
        <Caption>All</Caption>
      </TouchableListEntry>
      <TouchableListEntry onPress={() => goToSubreddit("popular")}>
        <Icon type="popular" />
        <Caption>Popular</Caption>
      </TouchableListEntry>
    </View>
  );
};
