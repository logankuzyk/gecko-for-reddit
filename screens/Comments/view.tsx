import React from "react";
import { FlatList, View } from "react-native";

import { renderItem } from "../../components/MixedContentList";
import { SubmissionCard } from "../../components/cards/Submission";
import { Submission, Comment } from "../../types/reddit";

interface CommentsScreenViewProps {
  submission: Submission;
  comments: Comment[];
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
      />
    </View>
  );
};
