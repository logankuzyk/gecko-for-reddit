import React from "react";
import { Image, View } from "react-native";

import { Caption } from "../typography/Caption";
import { useRedditContext } from "../../contexts/RedditContext";

interface AwardProps {
  src: string;
  count: number;
}

export const Award: React.FC<AwardProps> = ({ src, count }) => {
  const { clientCredentials } = useRedditContext();
  const authString = clientCredentials
    ? `bearer ${clientCredentials.accessToken}`
    : "";

  return (
    <View style={{ backgroundColor: "red" }}>
      <Image
        source={{
          uri: src,
          width: 16,
          height: 16,
          headers: { Authorization: authString },
        }}
      />
      <Caption>{count}</Caption>
    </View>
  );
};
