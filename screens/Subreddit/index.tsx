import React from "react";
import { SubredditScreenController } from "./controller";

import { RootStackScreenProps } from "../../types/navigation";

const SettingsScreenProvider: React.FC<RootStackScreenProps<"Subreddit">> = ({
  navigation,
}) => {
  return <SubredditScreenController navigation={navigation} />;
};

export default SettingsScreenProvider;
