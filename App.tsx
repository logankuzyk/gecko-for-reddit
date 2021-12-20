import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClientProvider, QueryClient } from "react-query";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { RedditProvider } from "./contexts/RedditContext";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <RedditProvider>
          <QueryClientProvider client={queryClient}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </QueryClientProvider>
        </RedditProvider>
      </SafeAreaProvider>
    );
  }
}
