export interface ICoffeeBag {
    name: string;
    brand: string;
    status: string;
    archived: boolean;
    createdAt?: string;
}

export interface ICoffeeBags extends Array<ICoffeeBag> {}
