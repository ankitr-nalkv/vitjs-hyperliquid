import { hyperliquidAPI } from "../../http-instances/hyperliquid.ts";

interface UserPortfolio {
  portfolio: Portfolio;
  openOrders: OpenOrder[];
  balance: string;
}

interface Portfolio {
  assetPositions: AssetPosition[];
  crossMaintenanceMarginUsed: string;
  crossMarginSummary: CrossMarginSummary; // Assuming CrossMarginSummary is an interface from 'api'
  marginSummary: MarginSummary; // Assuming MarginSummary is an interface from 'api'
  time: number;
  withdrawable: string;
}

interface OpenOrder {
  id: string;
  name: string;
  base_token: string;
  isPositionTpsl: boolean;
  isTrigger: boolean;
  limit_px: string;
  oid: number;
  order_type: string;
  sz: string;
  filled_sz: string;
  reduce_only: boolean;
  side: string;
  tif: any;
  timestamp: number;
  trigger_cond: string;
  trigger_px: string;
}

interface AssetPosition {
  id: string;
  name: string;
  base_token: string;
  leverage: any; // Replace `api.Leverage` with the appropriate type
  liquidation_px: string;
  margin_used: string;
  max_leverage: number;
  pos_val: string;
  roe: string;
  qty: string;
  side: string;
  unreal_pnl: string;
  tp_price: string;
  sl_price: string;
  tp_oid: number;
  sl_oid: number;
  type: string;
  entry_px?: string;
}

interface CrossMarginSummary {
  accountValue: string;
  totalMarginUsed: string;
  totalNtlPos: string;
  totalRawUsd: string;
}

interface MarginSummary {
  accountValue: string;
  totalMarginUsed: string;
  totalNtlPos: string;
  totalRawUsd: string;
}

const infoEndpoint = "/info";

export async function GetUserState(
  userAddress: string
): Promise<UserPortfolio> {
  try {
    const { data } = await hyperliquidAPI.post(infoEndpoint, {
      type: "webData2",
      user: userAddress,
    });
    return convertUserState(data);
  } catch (e) {
    throw e;
  }
}

function convertUserState(data): UserPortfolio {
  return data;
}
