import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Button, Drawer } from "react-native-paper";

import { SearchBar } from "../../components/SearchBar";
import { SearchResults } from "../../components/reddit/lists/SearchResults";
import { ThingToLoad } from "../../types/reddit";
interface RootDrawerScreenViewProps {
  promptLogin: () => void;
  subreddits: Array<ThingToLoad> | undefined;
  onChangeText: (input: string) => void;
  users: Array<ThingToLoad> | undefined;
}

export const RootDrawerScreenView: React.FC<RootDrawerScreenViewProps> = ({
  promptLogin,
  onChangeText,
  users,
  subreddits,
}) => {
  return (
    <ScrollView>
      <Drawer.Section title="User">
        <Button onPress={promptLogin}>Login</Button>
      </Drawer.Section>
      <SearchBar placeholder="Search" onChangeText={onChangeText} />
      {users && users.length > 0 ? (
        <Drawer.Section title="Matching Users">
          <SearchResults entries={users} />
        </Drawer.Section>
      ) : (
        <></>
      )}
      {subreddits && subreddits.length > 0 ? (
        <Drawer.Section title="Matching Subreddits">
          <SearchResults entries={subreddits} />
        </Drawer.Section>
      ) : (
        <></>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: "rgba(0,0,0,0)",
    justifyContent: "center",
    padding: 8,
  },
});
