import React from "react";
import { FlatList } from "react-native";

import { RedditSubreddit, RedditUser } from "../../../types/reddit";
import { renderItem } from "../../SearchPreview";
import { Seperator } from "./Seperator";

interface SearchActionsProps {
  entries: Array<RedditUser | RedditSubreddit>;
}

export const SearchActions: React.FC<SearchActionsProps> = ({ entries }) => {
  return (
    <FlatList
      data={entries}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={Seperator}
    />
  );
};
