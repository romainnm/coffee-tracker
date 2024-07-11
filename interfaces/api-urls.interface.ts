export interface IAuthURL {
    BASE: string;
    PATHS: string[];
}

export interface ICoffeeURL {
    BASE: string;
    PARAMS: string[];
}

export interface IURLs {
    ROOT: string;
    AUTH: IAuthURL;
    COFFEE: ICoffeeURL;
}