import { DrawerScreenProps } from "@react-navigation/drawer";
import { StackScreenProps } from "@react-navigation/stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: undefined;
  Modal: undefined;
  NotFound: undefined;
  Subreddit: {
    subreddit: string;
  };
  Comments: {
    subreddit: string;
    postId: string;
  };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, Screen>;

export type DrawerParamList = {
  Root: undefined;
  Auth: {
    code: string;
    state: string;
  };
};

export type RootDrawerScreenProps<Screen extends keyof DrawerParamList> =
  DrawerScreenProps<DrawerParamList, Screen>;
