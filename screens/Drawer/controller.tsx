import React, { useState } from "react";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";

import { RootDrawerScreenView } from "./view";
import { useRedditContext } from "../../contexts/RedditContext";
import { useSearch } from "../../hooks/useSearch";
import { ThingToLoad } from "../../types/reddit";

interface RootDrawerScreenControllerProps {
  navigation: DrawerNavigationHelpers;
}

export const RootDrawerScreenController: React.FC<
  RootDrawerScreenControllerProps
> = ({ navigation }) => {
  const [query, setQuery] = useState<string>("");
  const { promptLogin } = useRedditContext();

  const subreddits = useSearch(query);
  const users: Array<ThingToLoad> | undefined = query
    ? [
        {
          type: "user",
          name: query,
        },
      ]
    : undefined;

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
      subreddits={subreddits.data}
      users={users}
    />
  );
};
