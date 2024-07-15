import { Errback, NextFunction, Request, Response } from "express";

export const serverErrorHandler = (
    err: Errback,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    res.status(500).json({ error: err });
};
