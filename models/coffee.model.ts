import mongoose from "mongoose";
import { ICoffeeBag } from "../interfaces";
import { CoffeeStatus, CoffeeValidationMsg } from "../enums";

const CoffeeBagSchema = new mongoose.Schema<ICoffeeBag>({
    name: {
        type: String,
        required: [true, `name ${CoffeeValidationMsg.MUST_PROVIDE}`],
        trim: true,
        maxlength: [30, `name ${CoffeeValidationMsg.CHAR_LIMITED} to 30 chars`],
    },
    brand: {
        type: String,
        required: [true, `brand ${CoffeeValidationMsg.MUST_PROVIDE}`],
        trim: true,
        maxlength: [
            30,
            `brand ${CoffeeValidationMsg.CHAR_LIMITED} to 30 chars`,
        ],
    },
    status: {
        type: String,
        enum: {
            values: [
                CoffeeStatus.NEW,
                CoffeeStatus.IN_PROGRESS,
                CoffeeStatus.FINISHED,
            ],
            message: `{VALUE} ${CoffeeValidationMsg.NOT_SUPPORTED}`,
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
