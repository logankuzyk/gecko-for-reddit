import { MoreChildren, RawMoreChildren } from "../types/reddit";

export const parseMore = (
  more: RawMoreChildren,
  modhash: string
): MoreChildren => {
  return {
    ...more,
    type: "more",
    modhash,
  };
};
