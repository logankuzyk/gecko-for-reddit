import queryString from "query-string";

import { useRedditContext } from "../contexts/RedditContext";

export const useAuthString = (): ((path: string | undefined) => boolean) => {
  const { setToken } = useRedditContext();
  return (path: string | undefined) => {
    if (!path) {
      return false;
    }
    const query = "?" + decodeURI(path.split("#")[1]);
    const { access_token, expires_in } = queryString.parseUrl(query).query;
    if (
      access_token &&
      expires_in &&
      !Array.isArray(access_token) &&
      !Array.isArray(expires_in)
    ) {
      setToken({
        access_token,
        expires_in,
      });
      return true;
    } else {
      return false;
    }
  };
};
