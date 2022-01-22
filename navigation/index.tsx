import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import AuthScreen from "../screens/AuthScreen";
import { DrawerParamList, RootStackParamList } from "../types/navigation";
import LinkingConfiguration from "./LinkingConfiguration";
import SubredditScreen from "../screens/Subreddit";
import CommentsScreen from "../screens/Comments";
import ProfileScreen from "../screens/Profile";
import DrawerScreen from "../screens/Drawer";

export default ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <DrawerNavigator />
    </NavigationContainer>
  );
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Subreddit"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animationEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name="Subreddit" component={SubredditScreen} />
      <Stack.Screen name="Comments" component={CommentsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Root"
      screenOptions={{ headerShown: false }}
      drawerContent={DrawerScreen}
    >
      <Drawer.Screen name="Root" component={StackNavigator} />
      <Drawer.Screen name="Auth" component={AuthScreen} />
    </Drawer.Navigator>
  );
};
