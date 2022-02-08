import React, { useCallback, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";

import { TouchableIcon } from "../icons/TouchableIcon";
import { ActionDisplay } from "../../types/app";
import { TouchableListEntry } from "../reddit/lists/TouchableListEntry";

export interface SubredditProps {
  type: ActionDisplay;
  name?: "frontpage" | "all" | "popular";
  subreddit?: string;
  uri?: string | null;
}

export const Subreddit: React.FC<SubredditProps> = ({
  type,
  name,
  subreddit,
  uri,
}) => {
  const navigation = useNavigation();
  const handlePress = useCallback(() => {
    const destination = subreddit
      ? subreddit
      : !name || name === "frontpage"
      ? ""
      : name;
    navigation.navigate("Subreddit", { subreddit: destination });
  }, [name]);
  const title = useMemo(() => {
    const destination = subreddit ? subreddit : name ? name : "Subreddit";
    return destination.charAt(0).toUpperCase() + destination.slice(1);
  }, []);

  if (type === "drawer") {
    return (
      <TouchableListEntry
        type={name ? name : "subreddit"}
        uri={uri}
        onPress={handlePress}
        title={title}
      />
    );
  } else {
    // Prompt for subreddit?
    return <TouchableIcon type="subreddit" onPress={handlePress} />;
  }
};
