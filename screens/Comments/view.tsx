import React from "react";
import { FlatList, View } from "react-native";

import { renderItem } from "../../components/cards/Comment";
import { Comment } from "../../types/reddit";

interface CommentsScreenViewProps {
  comments: Comment[];
}

export const CommentsScreenView: React.FC<CommentsScreenViewProps> = ({
  comments,
}) => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 0,
      }}
    >
      <FlatList
        data={comments}
        keyExtractor={({ id }) => id}
        renderItem={renderItem}
      />
    </View>
  );
};
