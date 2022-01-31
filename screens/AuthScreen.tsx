import React, { useEffect } from "react";

import { RootDrawerScreenProps } from "../types/navigation";
import { useRedditContext } from "../contexts/RedditContext";

export default function AuthScreen({
  navigation,
  route,
}: RootDrawerScreenProps<"Auth">) {
  const { setAccessCode, setStateCode } = useRedditContext();
  useEffect(() => {
    const { code, state } = route.params;
    // reddit adds a "_#" to the end of the redirect!
    setAccessCode(code.slice(0, -2));
    setStateCode(state);
    navigation.goBack();
  }, []);

  return <></>;
}
