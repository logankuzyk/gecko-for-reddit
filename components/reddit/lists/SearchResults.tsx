import React from "react";
import { FlatList } from "react-native";

import { RedditSubreddit } from "../../../types/reddit";
import { renderItem } from "../../SearchPreview";
import { Seperator } from "./Seperator";

interface SearchResultsProps {
  entries: RedditSubreddit[] | undefined;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ entries }) => {
  return (
    <FlatList
      data={entries}
      keyExtractor={(item) => item.display_name}
      renderItem={renderItem}
      ItemSeparatorComponent={Seperator}
    />
  );
};
