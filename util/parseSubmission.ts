import { RawSubmission, RedditSubmission } from "../types/reddit";
import { determineSubmissionType } from "./determineSubmissionType";
import { parseDate } from "./parseDate";

export const parseSubmission = (
  submission: RawSubmission
): RedditSubmission => {
  return {
    ...submission,
    type: "submission",
    linkType: determineSubmissionType(submission),
    date: parseDate(submission.created),
  };
};
