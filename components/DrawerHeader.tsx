import React from "react";

import { Title } from "../components/typography/Title";

interface DrawerHeaderProps {}

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({}) => {
  return <Title>🦎 Gecko for reddit</Title>;
};
