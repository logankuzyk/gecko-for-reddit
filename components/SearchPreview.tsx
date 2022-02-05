import React from "react";
import { ListRenderItem } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";

import { Caption } from "./typography/Caption";
import { ThingToLoad } from "../types/reddit";
import { Icon } from "./reddit/Icon";
import { TouchableListEntry } from "./reddit/lists/TouchableListEntry";
import { useThingToLoad } from "../hooks/useThingToLoad";

interface SearchItemProps {
  item: ThingToLoad;
}

export const SearchItem: React.FC<SearchItemProps> = ({ item }) => {
  const navigation = useNavigation();
  const useLoad = useThingToLoad(item);
  const query = useLoad(item.name);

  if (query.isLoading) {
    return <ActivityIndicator />;
  } else if (!query.data) {
    return <></>;
  }

  const content = query.data;

  const onPress = () => {
    if (content.type === "subreddit") {
      navigation.navigate("Subreddit", { subreddit: content.display_name });
    } else if (item.type === "user") {
      navigation.navigate("Profile", { username: item.name });
    }
  };

  const img =
    content.type === "subreddit" ? content.community_icon : content.icon_img;
  const title =
    content.type === "subreddit" ? content.display_name : content.name;

  return (
    <TouchableListEntry onPress={onPress}>
      <Icon type={item.type} uri={img} />
      <Caption>{title}</Caption>
    </TouchableListEntry>
  );
};

export const renderItem: ListRenderItem<ThingToLoad> = ({ item }) => {
  return <SearchItem item={item} />;
};
