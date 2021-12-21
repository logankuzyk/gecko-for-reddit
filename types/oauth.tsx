export interface ClientCredentialsResponse {
  access_token: string;
  token_type: "bearer";
  expires_in: number;
  device_id: string;
  scope: string;
  error?: string;
}

export interface TokenResponse {
  access_token: string;
  token_type: "bearer";
  expires_in: number;
  scope: string;
  error?: string;
}
