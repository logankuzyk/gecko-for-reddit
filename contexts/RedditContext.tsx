import React, {
  createContext,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
  useEffect,
} from "react";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import * as SecureStore from "expo-secure-store";

import { CLIENT_ID, AUTH_URL } from "@env";

interface Token {
  access_token: string;
  expires_in: string;
}

interface RedditContextValue {
  isLoggedIn: boolean;
  redirectUri: string;
  promptLogin: () => Promise<void>;
  setToken: Dispatch<SetStateAction<Token | undefined>>;
}

const initialValue: RedditContextValue = {
  isLoggedIn: false,
  redirectUri: "",
  promptLogin: async () => {},
  setToken: () => {},
};

export const RedditContext = createContext(initialValue);

export const useRedditContext = () => {
  return useContext(RedditContext);
};

export const RedditProvider: React.FC = ({ children }) => {
  const [reddit, setReddit] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<Token | undefined>();
  const redirectUri = Linking.createURL("/auth/");

  const promptLogin = async () => {
    const params = new URLSearchParams();

    params.append("client_id", CLIENT_ID);
    params.append("response_type", "token");
    //TODO: verify state before and after request
    params.append("state", "state");
    params.append("redirect_uri", redirectUri);
    params.append("scope", "*");

    const loginUrl = `${AUTH_URL}?${params.toString()}`;

    await WebBrowser.openBrowserAsync(loginUrl);
  };

  useEffect(() => {
    (async () => {
      const _token = await SecureStore.getItemAsync("token");

      if (_token) {
        setToken(JSON.parse(_token));
      }
    })();
  }, []);

  useEffect(() => {
    if (token) {
      SecureStore.setItemAsync("token", JSON.stringify(token));
    }
  }, [token]);

  return (
    <RedditContext.Provider
      value={{
        isLoggedIn,
        redirectUri,
        promptLogin,
        setToken,
      }}
    >
      {children}
    </RedditContext.Provider>
  );
};
