import React from "react";
import { TextInput } from "react-native-paper";

interface SearchBarProps {
  placeholder: string;
  onChangeText: (query: string) => void;
  handleBlur: (e: any) => void;
  value: string;
  error: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onChangeText,
  handleBlur,
  value,
  error,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      onBlur={handleBlur}
      value={value}
      mode="outlined"
      error={error}
      autoCapitalize="none"
      outlineColor="rgba(0,0,0,0)"
    />
  );
};
