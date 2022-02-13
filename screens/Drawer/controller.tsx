import React, { useState, useCallback, useMemo } from "react";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";

import { RootDrawerScreenView } from "./view";
import { useSearch } from "../../hooks/useSearch";
import { ThingToLoad } from "../../types/reddit";

interface RootDrawerScreenControllerProps {
  navigation: DrawerNavigationHelpers;
}

export const RootDrawerScreenController: React.FC<
  RootDrawerScreenControllerProps
> = ({ navigation }) => {
  const [query, setQuery] = useState<string>("");

  const subredditResults = useSearch(query);
  const userResults: Array<ThingToLoad> | undefined = useMemo(
    () =>
      query
        ? [
            {
              type: "user",
              name: query,
            },
          ]
        : undefined,
    [query]
  );

  const onChangeText = useCallback(
    (input: string) => {
      if (input.length > 2) {
        setQuery(input);
      } else {
        setQuery("");
      }
    },
    [setQuery]
  );

  return (
    <RootDrawerScreenView
      onChangeText={onChangeText}
      subreddits={subredditResults.data}
      users={userResults}
    />
  );
};
