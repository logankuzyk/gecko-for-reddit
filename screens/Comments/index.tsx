import React from "react";
import { CommentsScreenController } from "./controller";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackScreenProps } from "../../types/navigation";

const SettingsScreenProvider: React.FC<RootStackScreenProps<"Comments">> = ({
  navigation,
  route,
}) => {
  const { subreddit, postId } = route.params;

  return (
    <SafeAreaView>
      <CommentsScreenController
        navigation={navigation}
        subreddit={subreddit}
        postId={postId}
      />
    </SafeAreaView>
  );
};

export default SettingsScreenProvider;
