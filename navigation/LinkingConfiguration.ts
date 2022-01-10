/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { DrawerParamList, RootStackParamList } from "../types/navigation";

const linking: LinkingOptions<RootStackParamList & DrawerParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {},
      Modal: "modal",
      NotFound: "*",
      Auth: {
        path: "auth",
      },
      Subreddit: {
        path: "/r/:subreddit/",
      },
      Comments: {
        path: "/r/:subreddit/comments/:postId",
      },
    },
  },
};

export default linking;
