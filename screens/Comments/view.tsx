import React from "react";
import { FlatList, View } from "react-native";

import { renderItem } from "../../components/reddit/lists/MixedContentList";
import {
  RedditSubmission,
  RedditComment,
  MoreChildren,
} from "../../types/reddit";
import { colors } from "../../styles/colors";

const Line: React.FC = () => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: colors.grey["100"],
      }}
    />
  );
};
interface CommentsScreenViewProps {
  submission: RedditSubmission;
  comments: Array<RedditComment | MoreChildren>;
}

export const CommentsScreenView: React.FC<CommentsScreenViewProps> = ({
  submission,
  comments,
}) => {
  const data = [submission, ...comments];

  return (
    <FlatList
      data={data}
      keyExtractor={({ id }) => id}
      renderItem={renderItem}
      ItemSeparatorComponent={Line}
      contentContainerStyle={{ backgroundColor: "#FFFFFF" }}
    />
  );
};
