import { Request, Response, NextFunction } from "express";

export interface AppError extends Error {
  status?: number;
}

export const errorHandlerMiddleware = (err: AppError, _req: Request, res: Response, next: NextFunction) => {
  console.log("Error::", err);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error"
  });
};
