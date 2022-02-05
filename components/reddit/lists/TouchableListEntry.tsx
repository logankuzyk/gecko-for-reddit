import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Icon } from "../../icons/Icon";
import { ImageOrIcon } from "../../icons/ImageOrIcon";
import { IconOptions } from "../../../types/app";
import { Caption } from "../../typography/Caption";

interface TouchableListEntryProps {
  onPress: () => void;
  type: IconOptions;
  title: string;
  uri?: string | null;
}

export const TouchableListEntry: React.FC<TouchableListEntryProps> = ({
  onPress,
  type,
  title,
  uri,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        paddingVertical: 4,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {(uri && type === "subreddit") || type === "user" ? (
        <ImageOrIcon type={type} uri={uri} />
      ) : (
        <Icon type={type} />
      )}
      <Caption>{title}</Caption>
    </TouchableOpacity>
  );
};
