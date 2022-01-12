import React from "react";
import { ListRenderItem } from "react-native";
import { Caption } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { RedditSubreddit, RedditUser } from "../types/reddit";
import { Icon } from "./reddit/Icon";
import { TouchableListEntry } from "./TouchableListEntry";

interface SearchItemProps {
  item: RedditSubreddit | RedditUser;
}

export const SearchItem: React.FC<SearchItemProps> = ({ item }) => {
  const navigation = useNavigation();

  const onPress = () => {
    if (item.type === "subreddit") {
      navigation.navigate("Subreddit", { subreddit: item.display_name });
    } else if (item.type === "user") {
      navigation.navigate("Profile", { username: item.name });
    }
  };

  const img = item.type === "subreddit" ? item.community_icon : item.icon_img;
  const title = item.type === "subreddit" ? item.display_name : item.name;

  return (
    <TouchableListEntry onPress={onPress}>
      <Icon type={item.type} uri={img} />
      <Caption>{title}</Caption>
    </TouchableListEntry>
  );
};

export const renderItem: ListRenderItem<RedditSubreddit | RedditUser> = ({
  item,
}) => {
  return <SearchItem item={item} />;
};
