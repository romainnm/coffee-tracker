import mongoose from "mongoose";
import { ICoffeeBag } from "../interfaces";

const CoffeeBagSchema = new mongoose.Schema<ICoffeeBag>({
    name: {
        type: String,
        required: [true, "name must be provided"],
        trim: true,
        maxlength: [30, "name is limited to 30 chars"],
    },
    brand: {
        type: String,
        required: [true, "brand must be provided"],
        trim: true,
        maxlength: [30, "name is limited to 30 chars"],
    },
    status: {
        type: String,
        enum: {
            values: ["new", "in progress", "finished"],
            message: "{VALUE} is not supported",
        },
        default: "new",
    },
    archived: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const CoffeeBagModel = mongoose.model("CoffeeBag", CoffeeBagSchema);

export { CoffeeBagModel };
