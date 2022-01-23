import React from "react";
import { ViewProps } from "react-native";

import { Title } from "../../typography/Title";

export const DrawerHeader: React.FC<ViewProps> = ({ ...props }) => {
  return <Title {...props}>🦎 Gecko for reddit</Title>;
};
