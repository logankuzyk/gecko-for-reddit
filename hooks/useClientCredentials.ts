import axios from "axios";
import base64 from "react-native-base64";
import { useQuery } from "react-query";

import { TOKEN_URL, CLIENT_ID } from "@env";

const fetchClientCredentials = async () => {
  const data = new URLSearchParams();
  data.append("grant_type", "https://oauth.reddit.com/grants/installed_client");
  data.append("device_id", "DO_NOT_TRACK_THIS_DEVICE");

  const res = await axios.post(TOKEN_URL, data.toString(), {
    headers: {
      Authorization: `Basic ${base64.encode(CLIENT_ID + ":")}`,
    },
  });

  return res.data;
};

export const useClientCredentials = () => {
  return useQuery("clientCredentials", fetchClientCredentials);
};
