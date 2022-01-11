import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { ActivityIndicator } from "react-native-paper";

import { SubredditScreenView } from "./view";
import { RootStackParamList } from "../../types/navigation";
import { useSubmissions } from "../../hooks/useSubmissions";

interface SubredditScreenControllerProps {
  navigation: StackNavigationProp<RootStackParamList, "Subreddit">;
  subreddit: string;
}

export const SubredditScreenController: React.FC<
  SubredditScreenControllerProps
> = ({ navigation, subreddit }) => {
  const submissions = useSubmissions(subreddit);

  if (submissions.isSuccess) {
    return <SubredditScreenView submissions={submissions.data} />;
  } else {
    return <ActivityIndicator animating={submissions.isLoading} />;
  }
};
