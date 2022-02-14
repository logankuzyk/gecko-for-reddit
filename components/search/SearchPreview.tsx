import React from "react";
import { ListRenderItem } from "react-native";

import { User } from "../actions/Profile";
import { Subreddit } from "../actions/Subreddit";
import { Loading } from "../Loading";
import { ThingToLoad } from "../../types/reddit";
import { useThingToLoad } from "../../hooks/useThingToLoad";

interface SearchItemProps {
  item: ThingToLoad;
}

export const SearchItem: React.FC<SearchItemProps> = ({ item }) => {
  const useLoad = useThingToLoad(item);
  const query = useLoad(item.name);

  if (query.isLoading) {
    return <Loading />;
  } else if (!query.data) {
    return <></>;
  }

  const content = query.data;

  const img =
    content.type === "subreddit" ? content.community_icon : content.icon_img;
  const title =
    content.type === "subreddit" ? content.display_name : content.name;

  if (content.type === "subreddit") {
    return <Subreddit type="drawer" uri={img} subreddit={title} />;
  } else {
    return <User type="drawer" uri={img} username={title} />;
  }
};

export const renderItem: ListRenderItem<ThingToLoad> = ({ item }) => {
  return <SearchItem item={item} />;
};
