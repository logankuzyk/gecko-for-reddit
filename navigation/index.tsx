/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
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
import { NavigationHeader } from "../components/NavigationHeader";
import DrawerScreen from "../screens/Drawer";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Root"
      screenOptions={{ headerShown: false }}
      drawerContent={DrawerScreen}
    >
      <Drawer.Screen name="Root" component={RootNavigator} />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Subreddit"
      screenOptions={{
        headerShown: true,
        header: NavigationHeader,
        gestureEnabled: true,
        animationEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name="Subreddit" component={SubredditScreen} />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ presentation: "card" }}
      />
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
