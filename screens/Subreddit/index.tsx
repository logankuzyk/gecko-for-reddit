import React from "react";
import { SubredditScreenController } from "./controller";

import { RootStackScreenProps } from "../../types/navigation";

const SubredditScreenProvider: React.FC<RootStackScreenProps<"Subreddit">> = ({
  navigation,
  route,
}) => {
  const subreddit = route.params ? route.params.subreddit : "";

  return (
    <SubredditScreenController navigation={navigation} subreddit={subreddit} />
  );
};

export default SubredditScreenProvider;
