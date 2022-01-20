import React from "react";
import { View } from "react-native";

import { Award } from "./Award";

interface AllAwardsProps {
  awards: Array<{ src: string; count: number }>;
}

export const AllAwards: React.FC<AllAwardsProps> = ({ awards }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {awards.map((award) => (
        <Award {...award} key={award.src} />
      ))}
    </View>
  );
};
