import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import { RootDrawerScreenView } from "./view";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";

interface RootDrawerScreenControllerProps {
  navigation: DrawerNavigationHelpers;
}

export const RootDrawerScreenController: React.FC<
  RootDrawerScreenControllerProps
> = ({ navigation }) => {
  const searchSchema = Yup.object().shape({
    query: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: { query: "" },
    onSubmit: ({ query }) => {
      navigation.navigate("Subreddit", { subreddit: query });
    },
    validationSchema: searchSchema,
  });

  return <RootDrawerScreenView formik={formik} />;
};
