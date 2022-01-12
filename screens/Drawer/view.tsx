import React from "react";
import { StyleSheet } from "react-native";
import { Button, Drawer } from "react-native-paper";

import { SearchBar } from "../../components/SearchBar";
import { SearchResults } from "../../components/reddit/lists/SearchResults";
import { SearchActions } from "../../components/reddit/lists/SearchActions";
import { RedditSubreddit, RedditUser } from "../../types/reddit";
interface RootDrawerScreenViewProps {
  promptLogin: () => void;
  results: RedditSubreddit[] | undefined;
  onChangeText: (input: string) => void;
  matches: Array<RedditUser | RedditSubreddit>;
}

export const RootDrawerScreenView: React.FC<RootDrawerScreenViewProps> = ({
  promptLogin,
  results,
  onChangeText,
  matches,
}) => {
  return (
    <>
      <Drawer.Section title="User">
        <Button onPress={promptLogin}>Login</Button>
      </Drawer.Section>
      <SearchBar placeholder="Search" onChangeText={onChangeText} />
      {matches && matches.length > 0 ? (
        <Drawer.Section title="Exact Matches">
          <SearchActions entries={matches} />
        </Drawer.Section>
      ) : (
        <></>
      )}
      {results && results.length > 0 ? (
        <Drawer.Section title="Search Results">
          <SearchResults entries={results} />
        </Drawer.Section>
      ) : (
        <></>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: "rgba(0,0,0,0)",
    justifyContent: "center",
    padding: 8,
  },
});
