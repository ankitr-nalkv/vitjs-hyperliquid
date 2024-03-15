import { customRetry } from "./utils/axios-retry.ts";
import { generateAxiosInstance } from "./utils/axios-instance-creation.ts";

const SERVER_URL = "https://api.hyperliquid.xyz";

const hyperliquidAPI = generateAxiosInstance(SERVER_URL);

customRetry(hyperliquidAPI);

export { hyperliquidAPI };
