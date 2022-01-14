import React from "react";
import { FlatList } from "react-native";

import { ThingToLoad } from "../../../types/reddit";
import { renderItem } from "../../SearchPreview";
import { Seperator } from "./Seperator";

interface SearchResultsProps {
  entries: Array<ThingToLoad> | undefined;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ entries }) => {
  return (
    <FlatList
      data={entries}
      keyExtractor={(item) => item.name}
      renderItem={renderItem}
      ItemSeparatorComponent={Seperator}
    />
  );
};
