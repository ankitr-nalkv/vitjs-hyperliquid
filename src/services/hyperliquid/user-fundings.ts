import { hyperliquidAPI } from "../../http-instances/hyperliquid.ts";
import { ApiResponse } from "../../utils/service-res-decorator.ts";
import {
  GetDerivativeMarkets,
  MarketData,
} from "../okto-bff/derivatives-market.ts";

interface apiUserFundings {
  delta: Delta;
  hash: string;
  time: number;
}

interface Delta {
  coin: string;
  fundingRate: string;
  szi: string;
  type: string;
  usdc: string;
}

type UserFundingOrders = UserFundingOrder[];

interface UserFundingOrder {
  id: string;
  name: string;
  base_token: string;
  funding_rate: string;
  qty: string;
  side: string;
  usdc: string;
  tx_hash: string;
  time: number;
}

export class HyperLiquidService {
  static infoEndpoint = "/info";

  @ApiResponse
  static async GetUserFundings(
    userAddress: string
  ): Promise<UserFundingOrders> {
    try {
      const { data }: { data: apiUserFundings[] } = await hyperliquidAPI.post(
        HyperLiquidService.infoEndpoint,
        {
          type: "userFunding",
          user: userAddress,
        }
      );
      const marketName = "HyperLiquid";
      const marketMap = await GetDerivativeMarkets(marketName);

      const res = convertUserFunding(data, marketMap);
      return res;
    } catch (e) {
      throw e;
    }
  }
}

function convertUserFunding(
  data: apiUserFundings[],
  marketMap: Record<string, MarketData>
): UserFundingOrders {
  const res: UserFundingOrders = [];

  for (const rawFunding of data) {
    const market = marketMap[rawFunding.delta.coin];

    const funding: UserFundingOrder = {
      id: market.id,
      name: market.name,
      base_token: market.base_token,
      funding_rate: rawFunding.delta.fundingRate,
      qty: Math.abs(parseFloat(rawFunding.delta.szi)).toString(),
      side: getSideFromSz(rawFunding.delta.szi),
      usdc: rawFunding.delta.usdc,
      time: rawFunding.time,
      tx_hash: rawFunding.hash,
    };
    res.push(funding);
  }

  return res;
}

function getSideFromSz(szi: string): string {
  let side: string;
  if (szi.includes("-")) {
    side = "short";
  } else {
    side = "long";
  }
  return side;
}
