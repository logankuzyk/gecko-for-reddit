import React from "react";
import { FlatList } from "react-native";

import { RedditSubreddit } from "../../../types/reddit";
import { renderItem } from "../subreddits/SubredditPreview";
import { Seperator } from "./Seperator";

interface SearchResultsProps {
  entries: RedditSubreddit[] | undefined;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ entries }) => {
  return (
    <FlatList
      data={entries}
      renderItem={renderItem}
      ItemSeparatorComponent={Seperator}
    />
  );
};
