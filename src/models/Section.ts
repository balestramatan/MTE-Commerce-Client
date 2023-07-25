import {observable} from "mobx";
import Category from "./Category.model";

export default class Section {
    @observable
    sectionId!: string;

    @observable
    sectionName!: string;

    @observable
    categories?: Category[];

    constructor(section?: Section) {
        if (section) {
            this.sectionId = section.sectionId;
            this.sectionName = section.sectionName;
            this.categories = section.categories;
        }
    }
}
