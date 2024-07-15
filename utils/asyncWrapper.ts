// Testing with a custom wrapper - Easier would be to use an npm package
import { NextFunction, Request, Response } from "express";

type AsyncMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction,
) => Promise<void>;

export const asyncWrapper = (fn: AsyncMiddleware) => {
    return async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> => {
        try {
            await fn(req, res, next);
        } catch (error) {
            next("Invalid Request");
        }
    };
};
