import React from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";

import { ThingToLoad } from "../../types/reddit";
import { renderItem } from "./SearchPreview";

interface SearchResultsProps {
  entries: Array<ThingToLoad> | undefined;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ entries }) => {
  return (
    <ScrollView horizontal={true} contentContainerStyle={{ width: "100%" }}>
      <FlatList
        nestedScrollEnabled={false}
        data={entries}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
      />
    </ScrollView>
  );
};
