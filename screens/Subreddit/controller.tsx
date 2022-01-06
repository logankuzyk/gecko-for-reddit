import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ActivityIndicator } from "react-native-paper";

import { SubredditScreenView } from "./view";
import { RootStackParamList } from "../../types/navigation";
import { useSubreddit } from "../../hooks/useSubreddit";

interface SubredditScreenControllerProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Subreddit">;
}

export const SubredditScreenController: React.FC<SubredditScreenControllerProps> =
  ({}) => {
    const submissions = useSubreddit("all");
    if (submissions.isSuccess) {
      return <SubredditScreenView submissions={submissions.data} />;
    } else {
      return <ActivityIndicator animating={submissions.isLoading} />;
    }
  };
