import { Constants } from "../constants/app-constants.ts";
import { ServiceError } from "../error/service-error.ts";

interface ApiResponse {
  status: string;
  result: any;
  error: {
    code: number;
    errorCode: string;
    message: string;
    trace_id: string;
    details: string;
  };
}

export const ApiResponse = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  // Capture the functional behavior of the decorated method
  const originalMethod = descriptor.value;
  // Override the decorated method's behavior with new behavior
  descriptor.value = async function (...args: any[]) {
    const endpoint = Constants.endpoints[target.name + ":" + propertyKey];
    let res: ApiResponse;
    try {
      const result = await originalMethod.apply(this, args);
      res = successResponse(result);
    } catch (e) {
      if (e instanceof ServiceError) {
        res = errorResponse(e);
      } else {
        const unknownError = new ServiceError(
          `[${endpoint}] Failed`,
          Constants.ERROR_TYPES[Constants.ERROR_CODES.PROCESS_ERROR].ErrorCode,
          Constants.ERROR_TYPES[Constants.ERROR_CODES.PROCESS_ERROR].HttpStatus
        );
        res = errorResponse(unknownError);
      }
    }

    return res;
  };
  return descriptor;
};

const successResponse = (data: any): ApiResponse => {
  return {
    status: "success",
    result: data,
  } as ApiResponse;
};

const errorResponse = (error: ServiceError): ApiResponse => {
  const errrMsg = Constants.ERROR_MESSAGE[error.errorCode].Message;
  return {
    status: "error",
    error: {
      code: error.httpCode,
      errorCode: error.errorCode,
      message: errrMsg,
      trace_id: "", // TODO: check what should be done here
      details: error.message,
    },
  } as ApiResponse;
};
