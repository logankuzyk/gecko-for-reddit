import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ActivityIndicator } from "react-native-paper";

import { CommentsScreenView } from "./view";
import { RootStackParamList } from "../../types/navigation";
import { useComments } from "../../hooks/useComments";

interface CommentsScreenControllerProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Comments">;
  subreddit: string;
  postId: string;
}

export const CommentsScreenController: React.FC<
  CommentsScreenControllerProps
> = ({ subreddit, postId }) => {
  const content = useComments(subreddit, postId);

  if (content.isSuccess) {
    return (
      <CommentsScreenView
        submission={content.data[0]}
        comments={content.data[1]}
      />
    );
  } else {
    return <ActivityIndicator animating={content.isLoading} />;
  }
};
