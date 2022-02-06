import React from "react";
import { View } from "react-native";
import * as Progress from "react-native-progress";

export const Loading: React.FC = ({}) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Progress.Bar width={200} height={10} indeterminate={true} />
    </View>
  );
};
