import { IURLs } from "../interfaces";

const URLs: IURLs = {
    ROOT: "/api/v1",
    AUTH: {
        BASE: "/auth",
        PATHS: ["/login", "/register"],
    },
    COFFEE: {
        BASE: "/coffee",
        PARAMS: ["/:id"],
    },
};

export default URLs;
