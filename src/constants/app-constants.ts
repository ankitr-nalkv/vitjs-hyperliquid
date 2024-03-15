export class Constants {
  static COLON_DELIMITER = ":";

  static ERROR_CODES = {
    BAD_REQUEST_ERROR: "BAD_REQUEST",
    DATA_NOT_FOUND_ERROR: "DATA_NOT_FOUND",
    DB_ERROR: "DB_ERROR",
    INVALID_DATA_ERROR: "INVALID_DATA",
    PROCESS_ERROR: "PROCESS",
    RETRY_ERROR: "RETRY_ERROR",
    UNAUTHORISED_ERROR: "UNAUTHORIZED",
    TIMEOUT_ERROR: "TIMEOUT",
    VALIDATION_ERROR: "VALIDATION_ERROR",
    METHOD_NOT_ALLOWED_ERROR: "METHOD_NOT_ALLOWED",
    NOT_ABLE_TO_CALL_DOWNSTREAM_SERVICE_ERROR:
      "NOT_ABLE_TO_CALL_DOWNSTREAM_SERVICE",
    LOCKED_BY_OTHER_PROCESS_ERROR: "LOCKED_BY_OTHER_PROCESS",
    UNPROCESSABLE_ENTITY_ERROR: "UNPROCESSABLE_ENTITY",
  };

  static ERROR_TYPES = {
    [Constants.ERROR_CODES.BAD_REQUEST_ERROR]: {
      ErrorCode: "ER-TECH-0001",
      HttpStatus: 400,
    },
    [Constants.ERROR_CODES.DATA_NOT_FOUND_ERROR]: {
      ErrorCode: "ER-TECH-0002",
      HttpStatus: 404,
    },
    [Constants.ERROR_CODES.DB_ERROR]: {
      ErrorCode: "ER-TECH-0003",
      HttpStatus: 500,
    },
    [Constants.ERROR_CODES.INVALID_DATA_ERROR]: {
      ErrorCode: "ER-TECH-0004",
      HttpStatus: 400,
    },
    [Constants.ERROR_CODES.PROCESS_ERROR]: {
      ErrorCode: "ER-TECH-0005",
      HttpStatus: 500,
    },
    [Constants.ERROR_CODES.RETRY_ERROR]: {
      ErrorCode: "ER-TECH-0006",
      HttpStatus: 500,
    },
    [Constants.ERROR_CODES.UNAUTHORISED_ERROR]: {
      ErrorCode: "ER-TECH-0007",
      HttpStatus: 401,
    },
    [Constants.ERROR_CODES.TIMEOUT_ERROR]: {
      ErrorCode: "ER-TECH-0008",
      HttpStatus: 408,
    },
    [Constants.ERROR_CODES.VALIDATION_ERROR]: {
      ErrorCode: "ER-TECH-0009",
      HttpStatus: 400,
    },
    [Constants.ERROR_CODES.METHOD_NOT_ALLOWED_ERROR]: {
      ErrorCode: "ER-TECH-0010",
      HttpStatus: 405,
    },
    [Constants.ERROR_CODES.NOT_ABLE_TO_CALL_DOWNSTREAM_SERVICE_ERROR]: {
      ErrorCode: "ER-TECH-0011",
      HttpStatus: 503,
    },
    [Constants.ERROR_CODES.LOCKED_BY_OTHER_PROCESS_ERROR]: {
      ErrorCode: "ER-TECH-0012",
      HttpStatus: 423,
    },
    [Constants.ERROR_CODES.UNPROCESSABLE_ENTITY_ERROR]: {
      ErrorCode: "ER-TECH-0013",
      HttpStatus: 422,
    },
  };

  static ERROR_MESSAGE: { [key: string]: { Code: number; Message: string } } = {
    "ER-TECH-0001": {
      Code: 400,
      Message: "Bad Request",
    },
    "ER-TECH-0002": {
      Code: 404,
      Message: "Resource not found",
    },
    "ER-TECH-0003": {
      Code: 500,
      Message: "Something went wrong. Internal server error",
    },
    "ER-TECH-0004": {
      Code: 400,
      Message: "Invalid request payload",
    },
    "ER-TECH-0005": {
      Code: 500,
      Message: "Something went wrong. Internal Processing error",
    },
    "ER-TECH-0006": {
      Code: 500,
      Message: "Something went wrong. Failure on retry",
    },
    "ER-TECH-0007": {
      Code: 401,
      Message: "Unauthorized",
    },
    "ER-TECH-0008": {
      Code: 408,
      Message: "Response time out",
    },
    "ER-TECH-0009": {
      Code: 400,
      Message: "Validation failed for the given request",
    },
    "ER-TECH-0010": {
      Code: 405,
      Message: "Wrong HTTP method used in request",
    },
    "ER-TECH-0011": {
      Code: 503,
      Message: "Service Unavailable",
    },
    "ER-TECH-0012": {
      Code: 423,
      Message: "Something went wrong",
    },
    "ER-TECH-0013": {
      Code: 422,
      Message: "Something went wrong. Unable to process request",
    },
    "ER-BUSS-0002": {
      Code: 404,
      Message: "Resource not found",
    },
    "ER-BUSS-0007": {
      Code: 401,
      Message: "Unauthorized",
    },
    "ER-BUSS-0009": {
      Code: 400,
      Message: "Validation failed for the given request",
    },
    "ER-BUSS-0012": {
      Code: 423,
      Message: "Something went wrong",
    },
    "ER-DOPS-0003": {
      Code: 400,
      Message: "Something went wrong. Internal server error",
    },
    "ER-DOPS-0008": {
      Code: 400,
      Message: "Response time out",
    },
  };

  static endpoints = {
    ["_HyperLiquidService:GetUserFundings"]: "ORDER_LIST",
  };
}
