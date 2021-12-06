import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

import { CLIENT_ID, AUTH_URL } from "@env";

const loginUrl = () => {
  const redirectUri = Linking.createURL("/auth");

  const params = new URLSearchParams();

  params.append("client_id", CLIENT_ID);
  params.append("response_type", "code");
  //TODO: verify state before and after request
  params.append("state", "state");
  params.append("redirect_uri", redirectUri);
  params.append("duration", "permanent");
  params.append("scope", "identity");

  return `${AUTH_URL}?${params.toString()}`;
};

export const useLogin = () => {
  const promptLogin = async () => {
    await WebBrowser.openBrowserAsync(loginUrl());
  };

  return {
    promptLogin,
  };
};
