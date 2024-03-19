import { HttpStatusCode } from "@shared/error/http-status-code";
export class AppError extends Error {
  public readonly message: string;
  public readonly statusCode: number;
  public readonly details: string[];

  constructor(message: string, statusCode: number = HttpStatusCode.BAD_REQUEST, details: string[] = []) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.details = details;
  }
}
