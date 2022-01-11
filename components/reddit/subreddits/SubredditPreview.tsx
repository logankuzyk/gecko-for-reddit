import React from "react";
import { ListRenderItem, TouchableOpacity } from "react-native";
import { Caption } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { RedditSubreddit } from "../../../types/reddit";
import { Icon } from "../Icon";

interface SubredditPreviewProps {
  subreddit: RedditSubreddit;
}

export const SubredditPreview: React.FC<SubredditPreviewProps> = ({
  subreddit,
}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Subreddit", { subreddit: subreddit.display_name });
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        paddingVertical: 4,
        paddingHorizontal: 8,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Icon type="subreddit" uri={subreddit.community_icon} />
      <Caption>{subreddit.display_name}</Caption>
    </TouchableOpacity>
  );
};

export const renderItem: ListRenderItem<RedditSubreddit> = ({ item }) => {
  return <SubredditPreview subreddit={item} />;
};
