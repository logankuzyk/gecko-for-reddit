import { RawSubmission, RedditSubmission } from "../types/reddit";
import { determineSubmissionType } from "./determineSubmissionType";

export const parseSubmission = (
  submission: RawSubmission
): RedditSubmission => {
  return {
    ...submission,
    type: "submission",
    linkType: determineSubmissionType(submission),
    date: new Date(submission.created * 1000),
  };
};
