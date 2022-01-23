import React from "react";
import { View, ViewProps } from "react-native";
import { Paragraph } from "./typography/Paragraph";

interface DrawerSectionProps extends ViewProps {
  children: React.ReactNode;
  title?: string;
  show?: boolean;
}

export const DrawerSection: React.FC<DrawerSectionProps> = ({
  children,
  title,
  show,
  ...props
}) => {
  if (!show) {
    return <></>;
  }

  const heading = title ? <Paragraph>{title}</Paragraph> : <></>;

  return (
    <View style={{ marginHorizontal: 16 }} {...props}>
      {heading}
      {children}
    </View>
  );
};
