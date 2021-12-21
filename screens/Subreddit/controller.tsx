import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { SubredditScreenView } from "./view";
import { RootStackParamList } from "../../types/navigation";

interface SubredditScreenControllerProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Subreddit">;
}

export const SubredditScreenController: React.FC<SubredditScreenControllerProps> =
  ({}) => {
    return <SubredditScreenView />;
  };
