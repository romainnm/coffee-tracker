export interface ICoffeeBag {
    name: string;
    brand: string;
    status: string; // "new, in progress, finished"
    archived: boolean;
}

export interface ICoffeeBags extends Array<ICoffeeBag> {}
