import axios from "axios";
import { useRef } from "react";

import { useRedditContext } from "../contexts/RedditContext";

export const useAxios = () => {
  const { current: instance } = useRef(axios.create());
  const { isLoggedIn } = useRedditContext();

  return instance;
};
