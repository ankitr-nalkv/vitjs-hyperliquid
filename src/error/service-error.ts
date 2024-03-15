export class ServiceError extends Error {
  message: string;
  errorCode: string;
  httpCode: number;
  constructor(message: string, errorCode: string, httpCode: number) {
    const errMsg = errorCode + " " + message;
    super(errMsg);

    this.message = message;
    this.errorCode = errorCode;
    this.httpCode = httpCode;
  }
}
