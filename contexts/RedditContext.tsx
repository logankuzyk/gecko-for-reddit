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
import { useQueryClient } from "react-query";

import { CLIENT_ID, AUTH_URL } from "@env";
import { useClientCredentials } from "../hooks/useClientCredentials";
import { useUserCredentials } from "../hooks/useUserCredentials";

interface Token {
  token: string;
  expiry: number;
}

interface RedditContextValue {
  isLoggedIn: boolean;
  redirectUri: string;
  promptLogin: () => Promise<void>;
  setUserCredentials: Dispatch<SetStateAction<Token | undefined>>;
  clientCredentials: Token | undefined;
  userCredentials: Token | undefined;
  accessCode: string | undefined;
  setAccessCode: Dispatch<SetStateAction<string | undefined>>;
  stateCode: string | undefined;
  setStateCode: Dispatch<SetStateAction<string | undefined>>;
}

const initialValue: RedditContextValue = {
  isLoggedIn: false,
  redirectUri: "",
  promptLogin: async () => {},
  setUserCredentials: () => {},
  clientCredentials: undefined,
  userCredentials: undefined,
  accessCode: undefined,
  setAccessCode: () => {},
  stateCode: undefined,
  setStateCode: () => {},
};

export const RedditContext = createContext(initialValue);

export const useRedditContext = () => {
  return useContext(RedditContext);
};

export const RedditProvider: React.FC = ({ children }) => {
  const redirectUri = Linking.createURL("/auth");
  const [reddit, setReddit] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [accessCode, setAccessCode] = useState<string>();
  const [stateCode, setStateCode] = useState<string>();
  const [userCredentials, setUserCredentials] = useState<Token | undefined>();
  const [clientCredentials, setClientCredentials] = useState<
    Token | undefined
  >();
  const clientToken = useClientCredentials();
  const userToken = useUserCredentials(accessCode, redirectUri);
  const queryClient = useQueryClient();

  // CREDENTIAL QUERIES

  useEffect(() => {
    if (clientToken.isSuccess && clientToken.data) {
      const expiry = new Date();
      expiry.setSeconds(
        expiry.getSeconds() + Number(clientToken.data.expires_in)
      );
      setClientCredentials({
        token: clientToken.data.access_token,
        expiry: expiry.getTime(),
      });
    }
  }, [clientToken.status]);

  useEffect(() => {
    console.log(userToken.status);
    if (userToken.isSuccess && userToken.data) {
      const expiry = new Date();
      expiry.setSeconds(
        expiry.getSeconds() + Number(userToken.data.expires_in)
      );
      setUserCredentials({
        token: userToken.data.access_token,
        expiry: expiry.getTime(),
      });
    }
  }, [userToken.status]);

  // READ STATE FROM STORAGE ON MOUNT

  useEffect(() => {
    (async () => {
      const _userCredentials = await SecureStore.getItemAsync(
        "userCredentials"
      );

      if (_userCredentials) {
        setUserCredentials(JSON.parse(_userCredentials));
      }
    })();
  }, []);

  // WRITE STATE TO STORAGE

  useEffect(() => {
    if (userCredentials) {
      SecureStore.setItemAsync(
        "userCredentials",
        JSON.stringify(userCredentials)
      );
    }

    if (userCredentials && userCredentials.expiry > Date.now()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [userCredentials]);

  // OTHER VALUES AND HANDLERS

  const promptLogin = async () => {
    const params = new URLSearchParams();

    params.append("client_id", CLIENT_ID);
    params.append("response_type", "code");
    //TODO: verify state before and after request
    params.append("state", "state");
    params.append("redirect_uri", redirectUri);
    params.append("duration", "permanent");
    params.append("scope", "*");

    const loginUrl = `${AUTH_URL}?${params.toString()}`;

    await WebBrowser.openBrowserAsync(loginUrl);
  };

  return (
    <RedditContext.Provider
      value={{
        isLoggedIn,
        redirectUri,
        promptLogin,
        setUserCredentials,
        userCredentials,
        clientCredentials,
        accessCode,
        setAccessCode,
        stateCode,
        setStateCode,
      }}
    >
      {children}
    </RedditContext.Provider>
  );
};
