import React from "react";
import { StyleSheet } from "react-native";
import { Button, Drawer } from "react-native-paper";

import { SearchBar } from "../../components/SearchBar";
import { SearchResults } from "../../components/reddit/lists/SearchResults";
import { RedditSubreddit } from "../../types/reddit";
interface RootDrawerScreenViewProps {
  promptLogin: () => void;
  results: RedditSubreddit[] | undefined;
  onChangeText: (input: string) => void;
}

export const RootDrawerScreenView: React.FC<RootDrawerScreenViewProps> = ({
  promptLogin,
  results,
  onChangeText,
}) => {
  return (
    <>
      <Drawer.Section title="User">
        <Button onPress={promptLogin}>Login</Button>
      </Drawer.Section>
      <SearchBar placeholder="Search" onChangeText={onChangeText} />
      <Drawer.Section title="Results">
        <SearchResults entries={results} />
      </Drawer.Section>
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
