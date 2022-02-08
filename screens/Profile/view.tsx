import React from "react";
import { FlatList } from "react-native-gesture-handler";

import { renderItem } from "../../components/reddit/lists/MixedContentList";
import {
  RedditSubmission,
  RedditComment,
  RedditUser,
  MoreChildren,
} from "../../types/reddit";
import { Seperator } from "../../components/reddit/lists/Seperator";

interface ProfileScreenViewProps {
  content: Array<RedditComment | RedditSubmission | MoreChildren>;
  user: RedditUser;
  onListEnd: () => void;
}

export const ProfileScreenView: React.FC<ProfileScreenViewProps> = ({
  content,
  onListEnd,
}) => {
  return (
    <FlatList
      data={content}
      keyExtractor={({ id }) => id}
      renderItem={renderItem}
      ItemSeparatorComponent={Seperator}
      onEndReachedThreshold={0}
      onEndReached={onListEnd}
    />
  );
};
