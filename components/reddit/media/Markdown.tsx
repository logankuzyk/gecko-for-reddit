import React from "react";
import _Markdown from "react-native-markdown-renderer";

interface MarkdownProps {
  children: string;
}
export const Markdown: React.FC<MarkdownProps> = ({ children }) => {
  return <_Markdown>{children}</_Markdown>;
};
