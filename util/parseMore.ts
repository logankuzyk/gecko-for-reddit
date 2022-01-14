import { MoreChildren, RawMoreChildren } from "../types/reddit";

export const parseMore = (more: RawMoreChildren): MoreChildren => {
  return {
    ...more,
    type: "more",
  };
};
