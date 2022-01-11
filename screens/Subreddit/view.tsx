import React from "react";
import { FlatList } from "react-native";

import { renderItem } from "../../components/reddit/submissions/Submission";
import { RedditSubmission } from "../../types/reddit";
import { Seperator } from "../../components/reddit/lists/Seperator";

interface SubredditScreenViewProps {
  submissions: RedditSubmission[];
}

export const SubredditScreenView: React.FC<SubredditScreenViewProps> = ({
  submissions,
}) => {
  return (
    <FlatList
      data={submissions}
      keyExtractor={({ id }) => id}
      renderItem={renderItem}
      ItemSeparatorComponent={Seperator}
    />
  );
};
