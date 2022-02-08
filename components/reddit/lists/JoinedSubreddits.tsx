import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import { Subreddit } from "../../actions/Subreddit";
import { useJoinedSubreddits } from "../../../hooks/useJoinedSubreddits";

export const JoinedSubreddits: React.FC = () => {
  const subreddits = useJoinedSubreddits();

  if (subreddits.data) {
    return (
      // Allows main drawer scroll to work properly.
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {subreddits.data.map((subreddit) => (
          <Subreddit
            type="drawer"
            uri={subreddit.community_icon}
            subreddit={subreddit.display_name}
            key={subreddit.display_name}
          />
        ))}
      </ScrollView>
    );
  } else {
    return <></>;
  }
};
