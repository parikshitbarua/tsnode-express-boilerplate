import { Request, Response } from "express";

export interface AppError extends Error {
  status?: number;
}

export const errorHandlerMiddleware = (err: AppError, req: Request, res: Response) => {
  let abc;
  console.log(err);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error"
  });
};
