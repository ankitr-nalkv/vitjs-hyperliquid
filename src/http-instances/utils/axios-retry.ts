import axiosRetry from "axios-retry";

const onAxiosRetry = (retryCount, error, requestConfig) => {
  console.log(`retrying axios request, count: ${retryCount}`);
  console.log(
    `retrying because: ${JSON.stringify({
      host: error.hostname,
      code: error.code,
    })}`
  );
  console.log(
    `request details: ${JSON.stringify({
      url: requestConfig.url,
      method: requestConfig.method,
      params: requestConfig.params,
    })}`
  );
};

export const customRetry = (api) => {
  (axiosRetry as any)(api, {
    retryCondition: axiosRetry.isNetworkOrIdempotentRequestError,
    retryDelay: axiosRetry.exponentialDelay,
    onRetry: onAxiosRetry,
    retries: 5,
  });
};
