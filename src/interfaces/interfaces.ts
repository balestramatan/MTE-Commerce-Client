import Category from "../models/Category.model";

export interface IOpeningHours {
    days: string,
    hours: string
}

export interface IUsefulLinks {
    name: string,
    url: string
}

export interface IInformation {
    type: string,
    value: string,
    icon: string
}

export interface IOurServices {
    name: string,
    type: string
    description: string,
}

export interface IMediaLinks {
    type: string;
    url: string;
}
