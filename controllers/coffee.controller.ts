import { Request, Response } from "express";
import { MockCoffeeBags } from "../mocks";

const getAllCoffeeBags = async (req: Request, res: Response): Promise<void> => {
    res.status(200).json(MockCoffeeBags);
};

const createCoffeeBag = async (req: Request, res: Response): Promise<void> => {
    res.status(200).send("Coffee created");
};

const getCoffeeBag = async (req: Request, res: Response): Promise<void> => {
    res.status(200).json(MockCoffeeBags[0]);
};

const updateCoffeeBag = async (req: Request, res: Response): Promise<void> => {
    res.status(200).send("Coffee info updated");
};

const deleteCoffeeBag = async (req: Request, res: Response): Promise<void> => {
    res.status(200).send("Coffee deleted");
};

export {
    getAllCoffeeBags,
    createCoffeeBag,
    getCoffeeBag,
    updateCoffeeBag,
    deleteCoffeeBag,
};
