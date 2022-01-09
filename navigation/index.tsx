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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import AuthScreen from "../screens/AuthScreen";
import { RootStackParamList } from "../types/navigation";
import LinkingConfiguration from "./LinkingConfiguration";
import SubredditScreen from "../screens/Subreddit";
import CommentsScreen from "../screens/Comments";
import { NavigationHeader } from "../components/NavigationHeader";

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
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Subreddit"
      screenOptions={{ headerShown: true, header: NavigationHeader }}
    >
      <Stack.Screen name="Subreddit" component={SubredditScreen} />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ gestureEnabled: true, presentation: "modal" }}
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
