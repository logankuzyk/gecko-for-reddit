import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Drawer, Paragraph, Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

interface RootDrawerScreenViewProps {}

export const RootDrawerScreenView: React.FC<
  RootDrawerScreenViewProps
> = ({}) => {
  const [query, setQuery] = useState<string>("");
  const onChangeText = (query: string) => setQuery(query);

  return (
    <SafeAreaView>
      <Drawer.Section title="Search" style={styles.section}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeText}
          value={query}
          icon={""}
          style={{ width: "90%", alignSelf: "center" }}
        />
      </Drawer.Section>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: "rgba(0,0,0,0)",
    justifyContent: "center",
  },
});
