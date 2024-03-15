import "./style.css";
import { HyperLiquidService } from "./services/hyperliquid/user-fundings.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = ``;

export function initApiCall() {
  return {
    HyperLiquidService,
  };
}

globalThis.apiCalls = initApiCall();
