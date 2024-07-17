import { Request, Response } from "express";
import { asyncWrapper } from "../utils";
import { CoffeeBagModel } from "../models";

const getAllCoffeeBags = asyncWrapper(async (req: Request, res: Response) => {
    const coffeeBags = await CoffeeBagModel.find({});
    res.status(200).json({ data: coffeeBags });
});

const createCoffeeBag = asyncWrapper(async (req: Request, res: Response) => {
    const coffeeBag = await CoffeeBagModel.create(req.body);
    res.status(201).json({ data: coffeeBag });
});

const getCoffeeBag = asyncWrapper(async (req: Request, res: Response) => {
    const _id = req.params.id;
    const coffeeBag = await CoffeeBagModel.findOne({ _id });
    res.status(200).json({ data: coffeeBag });
});

const updateCoffeeBag = asyncWrapper(async (req: Request, res: Response) => {
    const _id = req.params.id;
    const coffeeBag = await CoffeeBagModel.findOneAndUpdate({ _id }, req.body);
    if (coffeeBag) {
        res.status(200).json({ msg: `${coffeeBag.name} has been updated!` });
    }
});

const deleteCoffeeBag = asyncWrapper(async (req: Request, res: Response) => {
    const _id = req.params.id;
    const coffeeBag = await CoffeeBagModel.findOneAndDelete({ _id });
    if (coffeeBag) {
        res.status(200).json({ msg: `${coffeeBag.name} has been deleted!` });
    }
});

export {
    getAllCoffeeBags,
    createCoffeeBag,
    getCoffeeBag,
    updateCoffeeBag,
    deleteCoffeeBag,
};
