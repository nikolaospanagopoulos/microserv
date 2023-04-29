import { ValidationError } from "express-validator";
import { CustomError } from "./customError";

export class RequestValidationError extends CustomError {
  public errors: ValidationError[];
  public statusCode: number;
  constructor(errors: ValidationError[]) {
    super("Invalid request parameters");
    this.errors = errors;
    this.statusCode = 400;

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  serializeErrors() {
    return this.errors.map(function (error) {
      return {
        message: error.msg,
        field: error.type == "field" ? error.path : "",
      };
    });
  }
}
