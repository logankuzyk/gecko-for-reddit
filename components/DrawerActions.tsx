import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Caption } from "./typography/Caption";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { Icon } from "./reddit/Icon";
import { TouchableListEntry } from "./TouchableListEntry";

interface DrawerActionsProps {}

export const DrawerActions: React.FC<DrawerActionsProps> = ({}) => {
  const user = useCurrentUser();
  const navigation = useNavigation();

  const username = user.data ? user.data.name : "";
  const uri = user.data ? user.data.icon_img : "";

  const goToProfile = () => navigation.navigate("Profile", { username });
  const goToSubreddit = (subreddit: string) =>
    navigation.navigate("Subreddit", { subreddit });

  return (
    <View>
      <TouchableListEntry onPress={goToProfile}>
        <Icon type="user" />
        <Caption>Profile</Caption>
      </TouchableListEntry>
      <TouchableListEntry onPress={() => goToSubreddit("")}>
        <Icon type="frontpage" />
        <Caption>Frontpage</Caption>
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
