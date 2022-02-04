import base64 from "react-native-base64";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";

import { TOKEN_URL, CLIENT_ID } from "@env";
import { TokenResponse } from "../types/oauth";
import { useAxios } from "./useAxios";

const fetchUserCredentials = async (
  axios: AxiosInstance,
  accessCode: string,
  refreshToken: string | undefined,
  redirectUri: string
) => {
  const data = new URLSearchParams();

  if (!refreshToken) {
    data.append("grant_type", "authorization_code");
    data.append("code", accessCode);
    data.append("redirect_uri", redirectUri);
  } else {
    data.append("grant_type", "refresh_token");
    data.append("refresh_token", refreshToken);
  }

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
  refreshToken: string | undefined,
  redirectUri: string | undefined
) => {
  const axios = useAxios();
  return useQuery(
    ["userCredentials", accessCode, redirectUri],
    () => fetchUserCredentials(axios, accessCode!, refreshToken, redirectUri!),
    {
      enabled: !!accessCode && !!redirectUri,
      refetchInterval: 60 * 60 * 1000 * 0.5,
    }
  );
};
