import { RawSubmission, RedditSubmission } from "../types/reddit";
import { determineSubmissionType } from "./determineSubmissionType";
import { parseDate } from "./parseDate";
import { parseScore } from "./parseScore";

export const parseSubmission = (
  submission: RawSubmission
): RedditSubmission => {
  return {
    ...submission,
    type: "submission",
    linkType: determineSubmissionType(submission),
    scoreString: parseScore(submission.score),
    date: parseDate(submission.created),
  };
};
