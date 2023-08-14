import {observable} from "mobx";
import { IInformation, IMediaLinks, IOpeningHours, IUsefulLinks } from "../interfaces/interfaces";


export default class StoreInformationModel {

    @observable
    aboutText!: string;

    @observable
    usefulLinks!: IUsefulLinks;

    @observable
    openingHours!: IOpeningHours;

    @observable
    information!: IInformation;

    @observable
    mediaLinks!: IMediaLinks;

    @observable
    storeName!: string;


    constructor(storeInformation?: StoreInformationModel) {
        if (storeInformation) {
            this.aboutText = storeInformation.aboutText;
            this.usefulLinks = storeInformation.usefulLinks;
            this.openingHours = storeInformation.openingHours;
            this.information = storeInformation.information;
            this.mediaLinks = storeInformation.mediaLinks;
            this.storeName = storeInformation.storeName;
        }
    }
}
