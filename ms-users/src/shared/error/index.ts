import { HttpStatusCode } from "@shared/error/http-status-code";
export class AppError extends Error {
  public readonly message: string;
  public readonly statusCode: number;
  public readonly stack: string;

  constructor(message: string, statusCode: number = HttpStatusCode.BAD_REQUEST, stack: string = "") {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.stack = stack;
  }
}
