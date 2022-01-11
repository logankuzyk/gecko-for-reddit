import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";

import { RootDrawerScreenView } from "./view";
import { useRedditContext } from "../../contexts/RedditContext";

interface RootDrawerScreenControllerProps {
  navigation: DrawerNavigationHelpers;
}

export const RootDrawerScreenController: React.FC<
  RootDrawerScreenControllerProps
> = ({ navigation }) => {
  const { promptLogin } = useRedditContext();

  const searchSchema = Yup.object().shape({
    query: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: { query: "" },
    onSubmit: ({ query }, { resetForm }) => {
      navigation.navigate("Subreddit", { subreddit: query });
      resetForm();
    },
    validationSchema: searchSchema,
  });

  return <RootDrawerScreenView formik={formik} promptLogin={promptLogin} />;
};
