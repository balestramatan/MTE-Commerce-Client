import {observable} from "mobx";
import { Information, MediaLinks, OpeningHours, UsefulLinks } from "../interfaces/interfaces";


export default class StoreInformation {

    @observable
    aboutText!: string;

    @observable
    usefulLinks!: UsefulLinks;

    @observable
    openingHours!: OpeningHours;

    @observable
    information!: Information;

    @observable
    mediaLinks!: MediaLinks;


    constructor(storeInformation?: StoreInformation) {
        if (storeInformation) {
            this.aboutText = storeInformation.aboutText;
            this.usefulLinks = storeInformation.usefulLinks;
            this.openingHours = storeInformation.openingHours;
            this.information = storeInformation.information;
            this.mediaLinks = storeInformation.mediaLinks;
        }
    }
}
