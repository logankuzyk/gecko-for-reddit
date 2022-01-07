/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerScreenProps } from "@react-navigation/drawer";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: undefined;
  Modal: undefined;
  NotFound: undefined;
  Auth: {
    code: string;
    state: string;
  };
  Subreddit: {
    subreddit: string;
  };
  Comments: {
    subreddit: string;
    postId: string;
  };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootDrawerParamList = {
  Root: undefined;
};

export type RootDrawerScreenProps<Screen extends keyof RootDrawerParamList> =
  DrawerScreenProps<RootDrawerParamList, Screen>;
