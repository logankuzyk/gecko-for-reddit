import React from "react";
import { TextInput, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

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
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
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
    </View>
  );
};
