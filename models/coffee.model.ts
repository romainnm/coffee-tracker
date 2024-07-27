import mongoose from "mongoose";
import { ICoffeeBag } from "../interfaces";
import { CoffeeStatus, ValidationMsg } from "../enums";

const CoffeeBagSchema = new mongoose.Schema<ICoffeeBag>({
    name: {
        type: String,
        required: [true, `name ${ValidationMsg.MUST_PROVIDE}`],
        trim: true,
        maxlength: [30, `name ${ValidationMsg.CHAR_LIMITED} to 30 chars`],
    },
    brand: {
        type: String,
        required: [true, `brand ${ValidationMsg.MUST_PROVIDE}`],
        trim: true,
        maxlength: [30, `brand ${ValidationMsg.CHAR_LIMITED} to 30 chars`],
    },
    status: {
        type: String,
        enum: {
            values: [
                CoffeeStatus.NEW,
                CoffeeStatus.IN_PROGRESS,
                CoffeeStatus.FINISHED,
            ],
            message: `{VALUE} ${ValidationMsg.NOT_SUPPORTED}`,
        },
        default: CoffeeStatus.NEW,
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
