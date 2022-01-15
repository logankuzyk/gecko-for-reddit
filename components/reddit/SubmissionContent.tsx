import React from "react";
import { RedditSubmission } from "../../types/reddit";
import { Image } from "./Image";
import { SelfText } from "./SelfText";

export interface SubmissionContent {
  submission: RedditSubmission;
}

export const SubmissionContent: React.FC<SubmissionContent> = ({
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
