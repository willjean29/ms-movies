import winston from "winston";

export class AppLogger {
  private logger: winston.Logger;

  constructor(context: string) {
    this.logger = winston.createLogger({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf(
          (info) =>
            `\x1b[36m[${info.timestamp}] [\x1b[33m${context}\x1b[36m] \x1b[35m${info.level}\x1b[36m: \x1b[0m${info.message} ${
              info.data ? JSON.stringify(info.data) : ""
            }`
        )
      ),
      transports: [new winston.transports.Console()],
    });
  }

  info(message: string, data?: object) {
    this.logger.info(message, data);
  }

  error(message: string, data?: object) {
    this.logger.error(message, data);
  }

  warn(message: string, data?: object) {
    this.logger.warn(message, data);
  }
}
