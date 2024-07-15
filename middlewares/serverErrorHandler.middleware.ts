import { Errback, Request, Response } from "express";

export const serverErrorHandler = (
    err: Errback,
    req: Request,
    res: Response,
) => {
    res.status(500).json({ error: err });
};
