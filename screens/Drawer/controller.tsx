import React, { useState } from "react";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";

import { RootDrawerScreenView } from "./view";
import { useRedditContext } from "../../contexts/RedditContext";
import { useSearch } from "../../hooks/useSearch";
import { useExactMatches } from "../../hooks/useExactMatches";

interface RootDrawerScreenControllerProps {
  navigation: DrawerNavigationHelpers;
}

export const RootDrawerScreenController: React.FC<
  RootDrawerScreenControllerProps
> = ({ navigation }) => {
  const [query, setQuery] = useState<string>("");
  const { promptLogin } = useRedditContext();

  const results = useSearch(query);
  const matches = useExactMatches(query);

  const onChangeText = (input: string) => {
    if (input.length > 2) {
      setQuery(input);
    } else {
      setQuery("");
    }
  };

  return (
    <RootDrawerScreenView
      onChangeText={onChangeText}
      promptLogin={promptLogin}
      results={results.data}
      matches={matches}
    />
  );
};
