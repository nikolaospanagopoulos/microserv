import { CustomError } from "./customError";

export class DatabaseConnectionError extends CustomError {
  public reason: string;
  public statusCode: number;
  constructor() {
    super("Error connecting to DB");
    this.reason = "Error connecting to the Database";
    this.statusCode = 500;
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
  serializeErrors() {
    return [{ message: this.reason }];
  }
}
