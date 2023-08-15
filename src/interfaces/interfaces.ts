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

export interface IFilterOptions {
  label: string;
  name: string;
}

export interface IFilters {
  filterLabel: string;
  filterName: string;
  filterOptions: IFilterOptions[];
}

export interface IVariants {
    name: string;
    value: string;
    inStock: boolean;
    extraPrice: string
  }