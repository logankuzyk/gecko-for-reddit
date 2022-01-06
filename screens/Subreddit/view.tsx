import React from "react";
import { FlatList, View } from "react-native";

import { renderItem } from "../../components/cards/Submission";
import { Submission } from "../../types/reddit";

interface SubredditScreenViewProps {
  submissions: Submission[];
}

export const SubredditScreenView: React.FC<SubredditScreenViewProps> = ({
  submissions,
}) => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 0,
      }}
    >
      <FlatList
        data={submissions}
        keyExtractor={({ id }) => id}
        renderItem={renderItem}
      />
    </View>
  );
};
