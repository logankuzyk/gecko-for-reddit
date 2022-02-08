import React from "react";
import { TextInput } from "react-native";

interface SearchBarProps {
  placeholder: string;
  onChangeText: (query: string) => void;
  handleBlur?: (e: any) => void;
  value?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onChangeText,
  handleBlur,
  value,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      onBlur={handleBlur}
      value={value}
      autoCapitalize="none"
      maxLength={20}
      clearButtonMode="always"
      style={{
        height: 48,
      }}
    />
  );
};
