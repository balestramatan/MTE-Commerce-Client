export interface IProduct {
    name: string;
    images: string[];
    stock: boolean;
    price: string;
    promotionPrice: string
}

export interface MenuItemType {
    id: string;
    label: string;
    content: any;
}

export interface MenuItemContent {
    id: string;
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
