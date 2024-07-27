import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";

const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        throw new Error("Please provide email and password");
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET as string, {
        expiresIn: "30d",
    });

    res.status(200).json({ msg: "user logged", token });
};

const register = async (req: Request, res: Response) => {
    res.status(200).send("Account registered");
};

export { login, register };
