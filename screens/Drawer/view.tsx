import React, { useMemo } from "react";
import { StatusBar, ScrollView, View } from "react-native";

import { useRedditContext } from "../../contexts/RedditContext";
import { DrawerSection } from "../../components/navigation/drawer/DrawerSection";
import { DrawerActions } from "../../components/navigation/drawer/DrawerActions";
import { DrawerHeader } from "../../components/navigation/drawer/DrawerHeader";
import { SearchBar } from "../../components/search/SearchBar";
import { SearchResults } from "../../components/search/SearchResults";
import { ThingToLoad } from "../../types/reddit";
import { Seperator } from "../../components/reddit/lists/Seperator";
import { JoinedSubreddits } from "../../components/reddit/lists/JoinedSubreddits";

interface RootDrawerScreenViewProps {
  subreddits: Array<ThingToLoad> | undefined;
  onChangeText: (input: string) => void;
  users: Array<ThingToLoad> | undefined;
}

export const RootDrawerScreenView: React.FC<RootDrawerScreenViewProps> = ({
  onChangeText,
  users,
  subreddits,
}) => {
  const { isLoggedIn } = useRedditContext();
  const showMatchingUsers = useMemo(() => users && users.length > 0, [users]);
  const showMatchingSubreddits = useMemo(
    () => subreddits && subreddits.length > 0,
    [subreddits]
  );

  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <ScrollView>
        <DrawerSection show={true}>
          <DrawerHeader />
        </DrawerSection>
        <Seperator marginVertical={8} />
        <DrawerSection show={true}>
          <DrawerActions />
        </DrawerSection>
        <Seperator marginVertical={8} />
        <DrawerSection show={true}>
          <SearchBar placeholder="Search" onChangeText={onChangeText} />
        </DrawerSection>
        <Seperator marginVertical={8} />
        <DrawerSection title="Matching Users" show={showMatchingUsers}>
          <SearchResults entries={users} />
        </DrawerSection>
        <DrawerSection
          title="Matching Subreddits"
          show={showMatchingSubreddits}
        >
          <SearchResults entries={subreddits} />
        </DrawerSection>
        <DrawerSection title="Subscribed" show={isLoggedIn}>
          <JoinedSubreddits />
        </DrawerSection>
      </ScrollView>
    </View>
  );
};
