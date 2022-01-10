import React from "react";
import { FlatList, View } from "react-native";

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
    <View
      style={{
        flex: 1,
        marginTop: 0,
      }}
    >
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={renderItem}
        ItemSeparatorComponent={Seperator}
      />
    </View>
  );
};
