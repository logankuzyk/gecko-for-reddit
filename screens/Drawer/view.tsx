import { FormikProvider, FormikContextType } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import { Button, Drawer } from "react-native-paper";

import { SearchBar } from "../../components/SearchBar";

interface RootDrawerScreenViewProps {
  formik: FormikContextType<{ query: string }>;
  promptLogin: () => void;
}

export const RootDrawerScreenView: React.FC<RootDrawerScreenViewProps> = ({
  formik,
  promptLogin,
}) => {
  return (
    <>
      <Drawer.Section title="User">
        <Button onPress={promptLogin}>Login</Button>
      </Drawer.Section>
      <FormikProvider value={formik}>
        <Drawer.Section title="Subreddits" style={styles.section}>
          <SearchBar
            placeholder="Search"
            onChangeText={formik.handleChange("query")}
            value={formik.values.query}
            handleBlur={formik.handleBlur("query")}
          />
          <Button onPress={formik.handleSubmit}>Submit</Button>
        </Drawer.Section>
      </FormikProvider>
    </>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: "rgba(0,0,0,0)",
    justifyContent: "center",
    padding: 8,
  },
});
