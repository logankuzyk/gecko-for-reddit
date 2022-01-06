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
  const comments = useComments(subreddit, postId);

  if (comments.isSuccess) {
    return <CommentsScreenView comments={comments.data} />;
  } else {
    return <ActivityIndicator animating={comments.isLoading} />;
  }
};
