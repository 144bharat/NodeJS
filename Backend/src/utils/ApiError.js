class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong!",
    stack = "",
    errors = []
  ) {
    //Now overwritting all the parameters with the actual values.
    super(message); //Why this super method here and what is the purpose? Answer: This super() method calls the parent constructor means Error class constructor. And before overwritting anything else first we need to execute the extended class's constructor.
    this.statusCode = statusCode;
    this.message = message;
    this.stack = stack;
    this.success = false;
    this.errors = errors;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
