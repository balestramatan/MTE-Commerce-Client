import {observable} from "mobx";

export default class FilterOptionModel {
    @observable
    name: string = '';

    @observable
    value: string = '';

    @observable
    inStock: boolean = true;

    @observable
    extraPrice: string = '';

    constructor(filterOption?: FilterOptionModel) {
        if (filterOption) {
            this.name = filterOption.name;
            this.value = filterOption.value;
            this.inStock = filterOption.inStock;
            this.extraPrice = filterOption.extraPrice;
        }
    }
}
