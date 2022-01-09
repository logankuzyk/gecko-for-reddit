import React from "react";
import { FlatList, View } from "react-native";

import { renderItem } from "../../components/MixedContentList";
import { Submission, Comment, MoreChildren } from "../../types/reddit";
import { Seperator } from "../../components/cards/Seperator";

interface CommentsScreenViewProps {
  submission: Submission;
  comments: Array<Comment | MoreChildren>;
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
