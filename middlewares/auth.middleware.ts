import dotenv from "dotenv";
dotenv.config();
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

export const authMiddleware = async (
    req: Request,
    res: Response, // eslint-disable-line
    next: NextFunction,
) => {
    // Get authorization set by front-end
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        throw new Error("Token missing");
    }

    try {
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string,
        ) as JwtPayload;
        const { username } = decoded;
        req.user = { username };
        next();
    } catch (error) {
        throw new Error("Unauthorized");
    }
};
