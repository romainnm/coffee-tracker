import { Request, Response } from "express";
import { MockCoffeeBags } from "../mocks";

const getAllCoffeeBags = async (req: Request, res: Response): Promise<void> => {
    res.status(200).json(MockCoffeeBags);
};

const createCoffeeBag = async (req: Request, res: Response): Promise<void> => {
    res.status(200).json(MockCoffeeBags);
};

const getCoffeeBag = async (req: Request, res: Response): Promise<void> => {
    res.status(200).json(MockCoffeeBags);
};

const updateCoffeeBag = async (req: Request, res: Response): Promise<void> => {
    res.status(200).json(MockCoffeeBags);
};

const deleteCoffeeBag = async (req: Request, res: Response): Promise<void> => {
    res.status(200).json(MockCoffeeBags);
};

export {
    getAllCoffeeBags,
    createCoffeeBag,
    getCoffeeBag,
    updateCoffeeBag,
    deleteCoffeeBag,
};
