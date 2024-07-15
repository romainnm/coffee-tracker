import { Request, Response } from "express";
import { MockCoffeeBags } from "../mocks";
import { asyncWrapper } from "../utils";

const getAllCoffeeBags = asyncWrapper((req: Request, res: Response) => {
    res.status(200).json(MockCoffeeBags);
});

const createCoffeeBag = asyncWrapper((req: Request, res: Response) => {
    res.status(201).send("Coffee created");
});

const getCoffeeBag = asyncWrapper((req: Request, res: Response) => {
    res.status(200).json(MockCoffeeBags[0]);
});

const updateCoffeeBag = asyncWrapper((req: Request, res: Response) => {
    res.status(200).send("Coffee info updated");
});

const deleteCoffeeBag = asyncWrapper((req: Request, res: Response) => {
    res.status(200).send("Coffee deleted");
});

export {
    getAllCoffeeBags,
    createCoffeeBag,
    getCoffeeBag,
    updateCoffeeBag,
    deleteCoffeeBag,
};
