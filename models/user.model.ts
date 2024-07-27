import mongoose from "mongoose";
import { ValidationMsg } from "../enums";
import { IUser } from "../interfaces";

const UserSchema = new mongoose.Schema<IUser>({
    username: {
        type: String,
        required: [true, `username ${ValidationMsg.MUST_PROVIDE}`],
        trim: true,
        minlength: [3, `username ${ValidationMsg.CHAR_LIMITED} to 3 chars min`],
        maxlength: [
            30,
            `username ${ValidationMsg.CHAR_LIMITED} to 30 chars max`,
        ],
    },
    email: {
        type: String,
        required: [true, `email ${ValidationMsg.MUST_PROVIDE}`],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            `valid email ${ValidationMsg.MUST_PROVIDE}`,
        ],
        unique: true,
    },
    password: {
        type: String,
        required: [true, `password ${ValidationMsg.MUST_PROVIDE}`],
        minlength: 6,
    },
});

const UserModel = mongoose.model("User", UserSchema);

export { UserModel };
