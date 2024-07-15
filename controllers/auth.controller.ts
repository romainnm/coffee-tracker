import { Request, Response } from "express";

const login = async (req: Request, res: Response) => {
    res.status(200).send("jwt token");
};

const register = async (req: Request, res: Response) => {
    res.status(200).send("Account registered");
};

export { login, register };
