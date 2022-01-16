import React from "react";
import { View } from "react-native";
import { Subheading } from "react-native-paper";

interface DrawerSectionProps {
  children: React.ReactNode;
  title?: string;
  show?: boolean;
}

export const DrawerSection: React.FC<DrawerSectionProps> = ({
  children,
  title,
  show,
}) => {
  if (!show) {
    return <></>;
  }

  const heading = title ? <Subheading>{title}</Subheading> : <></>;

  return (
    <View>
      {heading}
      {children}
    </View>
  );
};
