import { useUser } from "./useUser";
import { useSubreddit } from "./useSubreddit";
import { ThingToLoad } from "../types/reddit";

// Chooses correct query hook for the data returned by search.
export const useThingToLoad = (thingToLoad: ThingToLoad) => {
  if (thingToLoad.type === "subreddit") {
    return useSubreddit;
  } else {
    return useUser;
  }
};
