import {action, computed, makeObservable, observable} from "mobx";
import SectionsFetcher from '../fetchers/SectionsFetchers.fetcher';
import ToastUtil from '../utils/ToastUtils';
import SectionModel from "../models/Section";

class SectionsStore {

    @observable
    sections: SectionModel[] = [];

    @observable
    isLoading: boolean = false;

    constructor() {
        makeObservable(this);
    }

    @action
    setSections = (sections: SectionModel[]) => this.sections = sections;

    @action
    getSections = async () => {
        try {
            this.isLoading = true;
            const {data} = await SectionsFetcher.getSections();
            this.setSections(data);
            this.isLoading = false;
        } catch (err: any) {
            console.error(err?.message);
            ToastUtil.error("Some error occurred.");
        }
    };

    @action
    deleteCategories = async (categoryId) => {
        try {
            await SectionsFetcher.deleteSection(categoryId);
        } catch (err: any) {
            console.error(err?.message);
            ToastUtil.error("Some error occurred.");
        }
    };

    @action
    createCategory = async (categoryName) => {
        try {
            await SectionsFetcher.createSection(categoryName);
            await this.getSections();
        } catch (err: any) {
            ToastUtil.error(err?.message);
            console.error(err);
        }
    };

    @action
    updateCategory = async (categoryId, categoryName) => {
        try {
            await SectionsFetcher.updateSection(categoryId, categoryName);
            await this.getSections();
        } catch (err: any) {
            ToastUtil.error(err?.message);
            console.error(err);
        }
    };

    @computed
    get sectionsSelectionOption() {
        return this.sections.map(s => ({
            label: s.sectionName,
            value: s.sectionId
        }));
    };
}

export default SectionsStore;
