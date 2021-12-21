import axios from "axios";
import base64 from "react-native-base64";
import { useQuery } from "react-query";

import { TOKEN_URL, CLIENT_ID } from "@env";
import { TokenResponse } from "../types/oauth";

const fetchUserCredentials = async (
  accessCode: string,
  redirectUri: string
) => {
  const data = new URLSearchParams();
  data.append("grant_type", "authorization_code");
  data.append("code", accessCode);
  data.append("redirect_uri", redirectUri);

  const res = await axios.post<TokenResponse>(TOKEN_URL, data.toString(), {
    headers: {
      Authorization: `Basic ${base64.encode(CLIENT_ID + ":")}`,
    },
  });

  if (res.data.error) {
    throw Error(res.data.error);
  }

  return res.data;
};

export const useUserCredentials = (
  accessCode: string | undefined,
  redirectUri: string | undefined
) => {
  return useQuery(
    ["userCredentials", accessCode, redirectUri],
    () => fetchUserCredentials(accessCode!, redirectUri!),
    {
      enabled: !!accessCode && !!redirectUri,
    }
  );
};
