import React, { createContext, useContext, useState } from "react";
import snoowrap from "snoowrap";

interface RedditContextValue {
  isLoggedIn: boolean;
}

const initialValue: RedditContextValue = {
  isLoggedIn: false,
};

export const RedditContext = createContext(initialValue);

export const useRedditContext = () => {
  return useContext(RedditContext);
};

export const RedditProvider: React.FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <RedditContext.Provider
      value={{
        isLoggedIn,
      }}
    >
      {children}
    </RedditContext.Provider>
  );
};
