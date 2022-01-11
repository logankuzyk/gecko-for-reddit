import React from "react";
import { ListRenderItem, View } from "react-native";
import { Caption } from "react-native-paper";

import { RedditSubreddit } from "../../../types/reddit";
import { Icon } from "../Icon";

interface SubredditPreviewProps {
  subreddit: RedditSubreddit;
}

export const SubredditPreview: React.FC<SubredditPreviewProps> = ({
  subreddit,
}) => {
  return (
    <View
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
    </View>
  );
};

export const renderItem: ListRenderItem<RedditSubreddit> = ({ item }) => {
  return <SubredditPreview subreddit={item} />;
};
