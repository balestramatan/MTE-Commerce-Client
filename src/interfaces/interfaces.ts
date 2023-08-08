export interface IProduct {
    name: string;
    images: string[];
    stock: boolean;
    price: string;
    promotionPrice: string
}

export interface OpeningHours {
    days: string,
    hours: string
}
export interface UsefulLinks {
    name: string,
    url: string
}
export interface Information {
    type: string,
    value: string,
    icon: string
}

export interface OurServices {
    name: string,
    type: string
    description: string,
}

export interface MediaLinks {
    type: string;
    url: string;
}

export interface FetchConstants {
    HOST: string;
}

export interface LoginConstants {
    ROUTE: string
}

export interface RegistrationConstants {
    ROUTE: string
}

export interface ApiResponseBody {
    status: boolean;
    results: any;
    errorId: string;
    errorMessage: string;
}
