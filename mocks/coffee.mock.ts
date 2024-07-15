import { ICoffeeBags } from "../interfaces";

const MockCoffeeBags: ICoffeeBags = [
    {
        name: "Ethiopian Yirgacheffe",
        brand: "Blue Bottle",
        status: "new",
        archived: false,
    },
    {
        name: "Colombian Supremo",
        brand: "Peet's Coffee",
        status: "in progress",
        archived: false,
    },
    {
        name: "Sumatra Mandheling",
        brand: "Starbucks",
        status: "finished",
        archived: true,
    },
    {
        name: "Guatemalan Antigua",
        brand: "Lavazza",
        status: "new",
        archived: false,
    },
    {
        name: "Kenya AA",
        brand: "Stumptown",
        status: "in progress",
        archived: false,
    },
];

export { MockCoffeeBags };
