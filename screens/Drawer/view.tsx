import { FormikProvider, FormikContextType } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import { Button, Drawer } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { SearchBar } from "../../components/SearchBar";

interface RootDrawerScreenViewProps {
  formik: FormikContextType<{ query: string }>;
}

export const RootDrawerScreenView: React.FC<RootDrawerScreenViewProps> = ({
  formik,
}) => {
  return (
    <SafeAreaView>
      <FormikProvider value={formik}>
        <Drawer.Section title="Search" style={styles.section}>
          <SearchBar
            placeholder="Search"
            onChangeText={formik.handleChange("query")}
            value={formik.values.query}
            error={!!formik.values.query && !!formik.touched.query}
            handleBlur={formik.handleBlur("query")}
          />
          <Button onPress={formik.handleSubmit}>Submit</Button>
        </Drawer.Section>
      </FormikProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: "rgba(0,0,0,0)",
    justifyContent: "center",
    padding: 8,
  },
});
