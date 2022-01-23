import React from "react";
import { StatusBar, ScrollView } from "react-native";
import { Button } from "react-native-paper";

import { DrawerSection } from "../../components/DrawerSection";
import { DrawerActions } from "../../components/DrawerActions";
import { DrawerHeader } from "../../components/DrawerHeader";
import { SearchBar } from "../../components/SearchBar";
import { SearchResults } from "../../components/reddit/lists/SearchResults";
import { ThingToLoad } from "../../types/reddit";
import { Seperator } from "../../components/reddit/lists/Seperator";
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
  const showMatchingUsers = users && users.length > 0;
  const showMatchingSubreddits = subreddits && subreddits.length > 0;

  return (
    <ScrollView
      contentContainerStyle={{
        marginTop: StatusBar.currentHeight,
      }}
    >
      <DrawerSection show={true}>
        <DrawerHeader />
      </DrawerSection>
      <Seperator />
      <DrawerSection show={true}>
        <DrawerActions />
      </DrawerSection>
      <Seperator />
      <DrawerSection title="User" show={true}>
        <Button onPress={promptLogin}>Login</Button>
      </DrawerSection>
      <Seperator />
      <DrawerSection show={true}>
        <SearchBar placeholder="Search" onChangeText={onChangeText} />
      </DrawerSection>
      <Seperator />
      <DrawerSection title="Matching Users" show={showMatchingUsers}>
        <SearchResults entries={users} />
      </DrawerSection>
      <DrawerSection title="Matching Subreddits" show={showMatchingSubreddits}>
        <SearchResults entries={subreddits} />
      </DrawerSection>
    </ScrollView>
  );
};
