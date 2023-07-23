import {observable} from "mobx";

export default class SubCategory {
    @observable
    categoryId!: string;

    @observable
    categoryName!: string;

    @observable
    parentCategoryId!: SubCategory[];

    constructor(subCategory?: SubCategory) {
        if (subCategory) {
            this.categoryId = subCategory.categoryId;
            this.categoryName = subCategory.categoryName;
            this.parentCategoryId = subCategory.parentCategoryId;
        }
    }
}
