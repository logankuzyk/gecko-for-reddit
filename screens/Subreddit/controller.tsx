import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { ActivityIndicator } from "react-native-paper";

import { SubredditScreenView } from "./view";
import { RootStackParamList } from "../../types/navigation";
import { useSubreddit } from "../../hooks/useSubreddit";

interface SubredditScreenControllerProps {
  navigation: StackNavigationProp<RootStackParamList, "Subreddit">;
  subreddit: string;
}

export const SubredditScreenController: React.FC<
  SubredditScreenControllerProps
> = ({ navigation, subreddit }) => {
  const submissions = useSubreddit(subreddit);

  if (submissions.isSuccess) {
    return <SubredditScreenView submissions={submissions.data} />;
  } else {
    return <ActivityIndicator animating={submissions.isLoading} />;
  }
};
