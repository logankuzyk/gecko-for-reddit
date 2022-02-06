import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";

import { Loading } from "../../components/Loading";
import { SubredditScreenView } from "./view";
import { RootStackParamList } from "../../types/navigation";
import { useSubmissions } from "../../hooks/useSubmissions";
import { RedditSubmission } from "../../types/reddit";

interface SubredditScreenControllerProps {
  navigation: StackNavigationProp<RootStackParamList, "Subreddit">;
  subreddit: string;
}

export const SubredditScreenController: React.FC<
  SubredditScreenControllerProps
> = ({ navigation, subreddit }) => {
  const { isSuccess, isLoading, fetchNextPage, data } =
    useSubmissions(subreddit);

  const pages = data ? data.pages.map((page) => page.data) : [];

  const submissions: RedditSubmission[] = Array.prototype.concat.apply(
    [],
    pages
  );

  const onListEnd = () => {
    fetchNextPage();
  };

  if (isSuccess && submissions) {
    return (
      <SubredditScreenView submissions={submissions} onListEnd={onListEnd} />
    );
  } else {
    return <Loading />;
  }
};
