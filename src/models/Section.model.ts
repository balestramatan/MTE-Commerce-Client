import {observable} from "mobx";
import Category from "./Category.model";

export default class SectionModel {
    @observable
    sectionId!: string;

    @observable
    sectionName!: string;

    @observable
    categories?: Category[];

    constructor(section?: SectionModel) {
        if (section) {
            this.sectionId = section.sectionId;
            this.sectionName = section.sectionName;
            this.categories = section.categories;
        }
    }
}
