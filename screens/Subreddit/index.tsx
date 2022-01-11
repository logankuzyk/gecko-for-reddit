import React from "react";
import { SubredditScreenController } from "./controller";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackScreenProps } from "../../types/navigation";

const SettingsScreenProvider: React.FC<RootStackScreenProps<"Subreddit">> = ({
  navigation,
  route,
}) => {
  const subreddit = route.params ? route.params.subreddit : "victoriabc";

  return (
    <SafeAreaView>
      <SubredditScreenController
        navigation={navigation}
        subreddit={subreddit}
      />
    </SafeAreaView>
  );
};

export default SettingsScreenProvider;
