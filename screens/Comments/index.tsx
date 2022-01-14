import React from "react";
import { CommentsScreenController } from "./controller";

import { RootStackScreenProps } from "../../types/navigation";

const SettingsScreenProvider: React.FC<RootStackScreenProps<"Comments">> = ({
  navigation,
  route,
}) => {
  const { subreddit, postId } = route.params;

  return (
    <CommentsScreenController
      navigation={navigation}
      subreddit={subreddit}
      postId={postId}
    />
  );
};

export default SettingsScreenProvider;
