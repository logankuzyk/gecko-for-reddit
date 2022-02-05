import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { IconOptions } from "../../types/app";
import { Paragraph } from "../typography/Paragraph";
import { Circle } from "./Circle";

interface IconProps {
  type: IconOptions;
}

export const Icon: React.FC<IconProps> = ({ type }) => {
  const icons = {
    user: "user",
    users: "users",
    all: "poll",
    frontpage: "house-user",
    popular: "rocket",
    settings: "cog",
  };

  if (type === "subreddit") {
    return (
      <Circle>
        <Paragraph>/r/</Paragraph>
      </Circle>
    );
  } else if (icons[type]) {
    return (
      <Circle>
        <FontAwesome5 solid name={icons[type]} />
      </Circle>
    );
  } else {
    return <></>;
  }
};
