import { customRetry } from "./utils/axios-retry.ts";
import { generateAxiosInstance } from "./utils/axios-instance-creation.ts";

const SERVER_URL = "https://norge-bff.okto.tech";

const oktoBffAPI = generateAxiosInstance(SERVER_URL);

customRetry(oktoBffAPI);

export { oktoBffAPI };
