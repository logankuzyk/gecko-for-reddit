import React from "react";
import { FlatList } from "react-native";

import { styleSheet } from "../../styles/styleSheet";
import { renderItem } from "../../components/reddit/lists/MixedContentList";
import {
  RedditSubmission,
  RedditComment,
  MoreChildren,
} from "../../types/reddit";
import { Seperator } from "../../components/reddit/lists/Seperator";

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
      ItemSeparatorComponent={Seperator}
      contentContainerStyle={styleSheet.flatList}
    />
  );
};
