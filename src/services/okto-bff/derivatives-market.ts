import { oktoBffAPI } from "../../http-instances/okto-bff.ts";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../utils/local-storage.ts";
import { Constants } from "../../constants/app-constants.ts";

// bifurcate types in another file
export interface MarketData {
  id: string;
  name: string;
  logo: string;
  base_token: string;
  volume: string;
  funding: string;
  px: string;
  px_24h_ago: string;
  mark_px: string;
  max_leverage: number;
  decimals: number;
  only_isolated: boolean;
  tags: string[];
  price_change_24h: number;
  is_watchlisted: boolean;
}

type MarketMap = {
  [name: string]: MarketData;
};

// TODO: call DQL for this data
export async function GetDerivativeMarkets(
  marketName: string
): Promise<MarketMap> {
  try {
    const delimiter = Constants.COLON_DELIMITER;

    const key = "BFF" + delimiter + "GetDerivativeMarkets";
    const cachedResult = getLocalStorageItem<MarketMap>(key);
    if (cachedResult) {
      return cachedResult;
    }

    const endpoint = `/api/v1/derivatives/${marketName}/markets`;
    const { data } = await oktoBffAPI.get(`${endpoint}`);

    const markets = data.result;

    const marketMap = {};
    for (const market of markets) {
      marketMap[market.name] = market;
    }

    const ttl = 5 * 60; // 5min TTL
    setLocalStorageItem<MarketMap>(key, marketMap, ttl);

    return marketMap;
  } catch (e) {
    throw e;
  }
}
