import axios from "axios";
import { AxiosInstance } from "axios";

export function generateAxiosInstance(
  serverUrl: string,
  authKey?: string,
  authSecret?: string
): AxiosInstance {
  const axiosInstance = axios.create({
    baseURL: serverUrl,
    // httpAgent: new http.HTTPAgent({ keepAlive: true }),
    // httpsAgent: new https.HTTPSAgent({ keepAlive: true }),
  });

  if (authKey && authSecret) {
    axiosInstance.defaults.headers[authKey] = authSecret;
  }
  return axiosInstance;
}
