import React from "react";
import { SubredditScreenController } from "./controller";

import { RootStackScreenProps } from "../../types/navigation";

const SettingsScreenProvider: React.FC<RootStackScreenProps<"Subreddit">> = ({
  navigation,
  route,
}) => {
  const subreddit = route.params ? route.params.subreddit : "victoriabc";

  return (
    <SubredditScreenController navigation={navigation} subreddit={subreddit} />
  );
};

export default SettingsScreenProvider;
