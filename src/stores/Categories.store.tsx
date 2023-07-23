import {action, computed, observable} from "mobx";
import Category from "../models/Category.model";

import CategoriesFetcher from '../fetchers/CategoriesFetchers';
import ToastUtil from '../utils/ToastUtils';

class CategoriesStore {

    @observable
    categories: Category[] = [];

    @observable
    isLoading: boolean = false;

    @action
    setCategories = (categories: Category[]) => this.categories = categories;

    @action
    getCategories = async () => {
        try {
            this.isLoading = true;
            let {categories} = await CategoriesFetcher.getCategories();
            this.setCategories(categories);
            this.isLoading = false;
        } catch (err: any) {
            console.error(err?.message);
            ToastUtil.error("Some error occurred.");
        }
    };

    @action
    deleteCategories = async (categoryId) => {
        try {
            await CategoriesFetcher.deleteCategories(categoryId);
        } catch (err: any) {
            console.error(err?.message);
            ToastUtil.error("Some error occurred.");
        }
    };

    @action
    createCategory = async (categoryName) => {
        try {
            await CategoriesFetcher.createCategory(categoryName);
            await this.getCategories();
        } catch (err: any) {
            ToastUtil.error(err?.message);
            console.error(err);
        }
    };

    @action
    updateCategory = async (categoryId, categoryName) => {
        try {
            await CategoriesFetcher.updateCategory(categoryId, categoryName);
            await this.getCategories();
        } catch (err: any) {
            ToastUtil.error(err?.message);
            console.error(err);
        }
    };

    @computed
    get classificationsSelectionOption() {
        return this.categories.map(c => ({
            label: c.categoryName,
            value: c.categoryId
        }));
    };
}

export default CategoriesStore;
