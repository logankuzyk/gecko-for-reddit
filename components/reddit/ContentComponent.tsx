import React from "react";
import { RedditSubmission } from "../../types/reddit";
import { Image } from "./Image";
import { SelfText } from "./SelfText";

export interface ContentComponentProps {
  submission: RedditSubmission;
}

export const ContentComponent: React.FC<ContentComponentProps> = ({
  submission,
}) => {
  const { linkType } = submission;

  if (linkType === "image") {
    return <Image submission={submission} />;
  } else if (linkType === "self") {
    return <SelfText submission={submission} />;
  } else if (linkType === "video") {
    return <></>;
  } else {
    return <></>;
  }
};
