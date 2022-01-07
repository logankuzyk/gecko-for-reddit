import React from "react";
import { Button } from "react-native-paper";

import { useRedditContext } from "../contexts/RedditContext";

export const LoginButton: React.FC = () => {
  const { promptLogin } = useRedditContext();

  return <Button onPress={promptLogin}>Login</Button>;
};
