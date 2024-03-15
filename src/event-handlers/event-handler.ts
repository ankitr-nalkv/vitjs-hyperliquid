// import { GetUserState } from "../services/hyperliquid/user-state.ts";

// const ApiResponse = {},
//   Print = {};

// const evenTypes = {
//   GET_HLQD_USER_STATE: "GET_HLQD_USER_STATE",
// };

// export function initEventHandler() {
//   var eventMethod = (window.addEventListener as any)
//     ? "addEventListener"
//     : "attachEvent";
//   var eventer = window[eventMethod];
//   var messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";
//   // version for nomenchlature experiments
//   // var version;

//   eventer(messageEvent, async function (e) {
//     switch (e.data.eventName) {
//       case evenTypes.GET_HLQD_USER_STATE:
//         const eventData = e.data.eventData;
//         const { address } = eventData;
//         const res = await GetUserState(address);
//         postFunctions(evenTypes.GET_HLQD_USER_STATE, res);
//         break;
//     }
//   });
// }

// function postFunctions(key, value) {
//   try {
//     switch (key) {
//       case evenTypes.GET_HLQD_USER_STATE:
//         if (ApiResponse) {
//           (ApiResponse as any).postMessage(value);
//         }
//         break;
//       default:
//         if (Print) return (Print as any).postMessage(value);
//     }
//   } catch (err) {
//     throw err;
//   }
// }
