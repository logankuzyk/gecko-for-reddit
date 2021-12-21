import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types/navigation";
import { useRedditContext } from "../contexts/RedditContext";

export default function AuthScreen({ route }: RootStackScreenProps<"Auth">) {
  const { setAccessCode, setStateCode } = useRedditContext();
  useEffect(() => {
    const { code, state } = route.params;
    // reddit adds a "_#" to the end of the redirect!
    setAccessCode(code.slice(0, -2));
    setStateCode(state);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
