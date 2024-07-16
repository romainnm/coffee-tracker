import { ICoffeeBags } from "../interfaces";
import { CoffeeStatus } from "../enums";

const MockCoffeeBags: ICoffeeBags = [
    {
        name: "Ethiopian Yirgacheffe",
        brand: "Blue Bottle",
        status: CoffeeStatus.NEW,
        archived: false,
        createdAt: "2023-01-01T10:00:00Z",
    },
    {
        name: "Colombian Supremo",
        brand: "Peet's Coffee",
        status: CoffeeStatus.IN_PROGRESS,
        archived: false,
        createdAt: "2023-02-15T11:30:00Z",
    },
    {
        name: "Sumatra Mandheling",
        brand: "Starbucks",
        status: CoffeeStatus.FINISHED,
        archived: true,
        createdAt: "2023-03-10T09:15:00Z",
    },
    {
        name: "Guatemalan Antigua",
        brand: "Lavazza",
        status: CoffeeStatus.NEW,
        archived: false,
        createdAt: "2023-04-05T14:45:00Z",
    },
    {
        name: "Kenya AA",
        brand: "Stumptown",
        status: CoffeeStatus.IN_PROGRESS,
        archived: false,
        createdAt: "2023-05-20T08:25:00Z",
    },
];

export { MockCoffeeBags };
