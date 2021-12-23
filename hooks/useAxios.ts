import axios from "axios";
import { useRef } from "react";

import { useRedditContext } from "../contexts/RedditContext";

export const useAxios = () => {
  const { current: instance } = useRef(axios.create());
  const { isLoggedIn, userCredentials, clientCredentials } = useRedditContext();

  instance.defaults.baseURL = "https://oauth.reddit.com";

  if (isLoggedIn && userCredentials) {
    instance.defaults.headers.common[
      "Authorization"
    ] = `bearer ${userCredentials.accessToken}`;
  } else if (clientCredentials) {
    instance.defaults.headers.common[
      "Authorization"
    ] = `bearer ${clientCredentials.accessToken}`;
  }

  return instance;
};
