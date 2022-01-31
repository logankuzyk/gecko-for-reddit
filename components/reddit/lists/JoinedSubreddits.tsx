import React, { useCallback } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { Icon } from "../Icon";
import { Caption } from "../../typography/Caption";
import { useJoinedSubreddits } from "../../../hooks/useJoinedSubreddits";
import { TouchableListEntry } from "../../TouchableListEntry";

export const JoinedSubreddits: React.FC = () => {
  const subreddits = useJoinedSubreddits();
  const navigation = useNavigation();

  const handlePress = useCallback(
    (subreddit: string) => {
      navigation.navigate("Subreddit", { subreddit });
    },
    [navigation]
  );

  if (subreddits.data) {
    return (
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {subreddits.data ? (
          subreddits.data.map((subreddit) => (
            <TouchableListEntry
              onPress={() => handlePress(subreddit.display_name)}
            >
              <Icon type="subreddit" />
              <Caption>{subreddit.display_name}</Caption>
            </TouchableListEntry>
          ))
        ) : (
          <></>
        )}
      </ScrollView>
    );
  } else {
    return <></>;
  }
};
