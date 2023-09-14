import {action, makeObservable, observable} from "mobx";
import ToastUtil from "../utils/ToastUtils";
import {
    IMediaLinks,
    IInformation,
    IOpeningHours,
    IUsefulLinks,
    IOurServices
} from "../interfaces/interfaces";
import StoreInformationFetcher from "../fetchers/StoreInformation.fetcher";

class StoreInformationStore {
    @observable
    aboutText: string = "";

    @observable
    usefulLinks: IUsefulLinks[] = [];

    @observable
    openingHours: IOpeningHours[] = [];

    @observable
    ourServices: IOurServices[] = [];

    @observable
    information: IInformation[] = [];

    @observable
    mediaLinks: IMediaLinks[] = [];

    @observable
    storeName: string = "";

    @observable
    headerAddsTexts: string[] = [];

    @observable
    isLoading: boolean = false;

    constructor() {
        makeObservable(this);
    }

    @action
    setAboutText = (aboutText: string) => (this.aboutText = aboutText);

    @action
    setUsefulLinks = (usefulLinks: IUsefulLinks[]) =>
        (this.usefulLinks = usefulLinks);

    @action
    setOpeningHours = (openingHours: IOpeningHours[]) =>
        (this.openingHours = openingHours);

    @action
    setInformation = (information: IInformation[]) =>
        (this.information = information);

    @action
    setMediaLinks = (mediaLinks: IMediaLinks[]) => (this.mediaLinks = mediaLinks);

    @action
    setOurServices = (ourServices: IOurServices[]) => (this.ourServices = ourServices);

    @action
    setStoreName = (storeName: string) => (this.storeName = storeName);

    @action
    setHeaderAddsTexts = (texts: string[]) => (this.headerAddsTexts = texts);

    @action
    setIsLoading = (isLoading: boolean) => (this.isLoading = isLoading);

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
            this.setOurServices(data.ourServices)
            this.setHeaderAddsTexts(data.headerAddsTexts)
        } catch (err: any) {
            console.error(err?.message);
            ToastUtil.error("Some error occurred.");
        } finally {
            this.setIsLoading(false);
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
