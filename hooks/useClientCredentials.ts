import base64 from "react-native-base64";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";

import { TOKEN_URL, CLIENT_ID, CLIENT_TOKEN_URL } from "@env";
import { ClientCredentialsResponse } from "../types/oauth";
import { useAxios } from "../hooks/useAxios";

const fetchClientCredentials = async (axios: AxiosInstance) => {
  const data = new URLSearchParams();
  data.append("grant_type", CLIENT_TOKEN_URL);
  data.append("device_id", "DO_NOT_TRACK_THIS_DEVICE");

  const res = await axios.post<ClientCredentialsResponse>(
    TOKEN_URL,
    data.toString(),
    {
      headers: {
        Authorization: `Basic ${base64.encode(CLIENT_ID + ":")}`,
      },
    }
  );

  if (res.data.error) {
    throw Error(res.data.error);
  }

  return res.data;
};

export const useClientCredentials = () => {
  const axios = useAxios();
  return useQuery("clientCredentials", () => fetchClientCredentials(axios), {
    refetchInterval: 60 * 60 * 1000,
  });
};
