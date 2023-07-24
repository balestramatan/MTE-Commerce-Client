import {action, makeObservable, observable} from "mobx";
import ToastUtil from "../utils/ToastUtils";
import {
    MediaLinks,
    Information,
    OpeningHours,
    UsefulLinks,
} from "../interfaces/interfaces";
import StoreInformationFetcher from '../fetchers/StoreInformationFetchers';

class StoreInformationStore {
    @observable
    aboutText: string = '';

    @observable
    usefulLinks: UsefulLinks[] = [];

    @observable
    openingHours: OpeningHours[] = [];

    @observable
    information: Information[] = [];

    @observable
    mediaLinks: MediaLinks[] = [];

    @observable
    storeName: string = 'סמוק טוק';

    @observable
    isLoading: boolean = false;

    constructor() {
        makeObservable(this);
    }

    @action
    setAboutText = (aboutText: string) => this.aboutText = aboutText;

    @action
    setUsefulLinks = (usefulLinks: UsefulLinks[]) => this.usefulLinks = usefulLinks;

    @action
    setOpeningHours = (openingHours: OpeningHours[]) => this.openingHours = openingHours;

    @action
    setInformation = (information: Information[]) => this.information = information;

    @action
    setMediaLinks = (mediaLinks: MediaLinks[]) => this.mediaLinks = mediaLinks;

    @action
    setStoreName = (storeName: string) => this.storeName = storeName;

    @action
    setIsLoading = (isLoading: boolean) => this.isLoading = isLoading;

    @action
    getStoreInformation = async () => {
        try {
            this.setIsLoading(true);
            let {data} = await StoreInformationFetcher.getStoreInformation();

            this.setAboutText(data.aboutText);
            this.setUsefulLinks(data.usefulLinks);
            this.setOpeningHours(data.openingHours);
            this.setInformation(data.information);
            this.setMediaLinks(data.mediaLinks);
            this.setStoreName(data.storeName);
            this.setIsLoading(false);
        } catch (err: any) {
            console.error(err?.message);
            ToastUtil.error("Some error occurred.");
        }
    };

    /*
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

    */
}

export default StoreInformationStore;
