import { Request, Response } from "express";
import { MockCoffeeBags } from "../mocks";

const getAllCoffeeBags = async (req: Request, res: Response): Promise<void> => {
    try {
        // TODO: remove mock response after integration with database
        res.status(200).json(MockCoffeeBags);
    } catch (error) {
        res.status(500).json({msg: "Invalid request"});
    }
};

const createCoffeeBag = async (req: Request, res: Response): Promise<void> => {
    try {
        // TODO: remove mock response after integration with database
        res.status(201).send("Coffee created");
    } catch (error) {
        res.status(500).json({msg: "Invalid request"});
    }
    
};

const getCoffeeBag = async (req: Request, res: Response): Promise<void> => {
    try {
        // TODO: remove mock response after integration with database
        res.status(200).json(MockCoffeeBags[0]);
    } catch (error) {
        res.status(500).json({msg: "Invalid request"});
    }
    
};

const updateCoffeeBag = async (req: Request, res: Response): Promise<void> => {
    try {
        // TODO: remove mock response after integration with database
        res.status(200).send("Coffee info updated");
    } catch (error) {
        res.status(500).json({msg: "Invalid request"});
    }
    
};

const deleteCoffeeBag = async (req: Request, res: Response): Promise<void> => {
    try {
        // TODO: remove mock response after integration with database
        res.status(200).send("Coffee deleted");
    } catch (error) {
        res.status(500).json({msg: "Invalid request"});
    }
};

export {
    getAllCoffeeBags,
    createCoffeeBag,
    getCoffeeBag,
    updateCoffeeBag,
    deleteCoffeeBag,
};
