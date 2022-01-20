import { RedditContent } from "../types/reddit";

export const parseAwards = (
  content: RedditContent
): Array<{ src: string; count: number }> => {
  return content.all_awardings.map((award) => {
    const src = award.resized_static_icons.filter(
      ({ height }) => height === 32
    )[0].url;
    const { count } = award;

    return { src, count };
  });
};
