import React from "react";
import { FlatList } from "react-native-gesture-handler";

import { renderItem } from "../../components/reddit/submissions/Submission";
import { RedditSubmission } from "../../types/reddit";
import { Seperator } from "../../components/reddit/lists/Seperator";
import { Footer } from "../../components/reddit/lists/Footer";
import { BottomTabBar } from "../../components/navigation/BottomTabBar";

interface SubredditScreenViewProps {
  submissions: RedditSubmission[];
  onListEnd: () => void;
}

export const SubredditScreenView: React.FC<SubredditScreenViewProps> = ({
  submissions,
  onListEnd,
}) => {
  return (
    <BottomTabBar>
      <FlatList
        data={submissions}
        keyExtractor={({ id }) => id}
        renderItem={renderItem}
        ItemSeparatorComponent={Seperator}
        ListFooterComponent={Footer}
        onEndReachedThreshold={0}
        onEndReached={onListEnd}
      />
    </BottomTabBar>
  );
};
