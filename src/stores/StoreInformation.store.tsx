import { action, makeObservable, observable } from "mobx";
import ToastUtil from "../utils/ToastUtils";
import {
  MediaLinks,
  Information,
  OpeningHours,
  UsefulLinks,
  OurServices
} from "../interfaces/interfaces";
import StoreInformationFetcher from "../fetchers/StoreInformation.fetcher";

class StoreInformationStore {
  @observable
  aboutText: string = "";

  @observable
  usefulLinks: UsefulLinks[] = [];

  @observable
  openingHours: OpeningHours[] = [];

  @observable
  ourServices: OurServices[] = [];

  @observable
  information: Information[] = [];

  @observable
  mediaLinks: MediaLinks[] = [];

  @observable
  storeName: string = "";

  @observable
  isLoading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  setAboutText = (aboutText: string) => (this.aboutText = aboutText);

  @action
  setUsefulLinks = (usefulLinks: UsefulLinks[]) =>
    (this.usefulLinks = usefulLinks);

  @action
  setOpeningHours = (openingHours: OpeningHours[]) =>
    (this.openingHours = openingHours);

  @action
  setInformation = (information: Information[]) =>
    (this.information = information);

  @action
  setMediaLinks = (mediaLinks: MediaLinks[]) => (this.mediaLinks = mediaLinks);

  @action
  setOurServices = (ourServices: OurServices[]) => (this.ourServices = ourServices);

  @action
  setStoreName = (storeName: string) => (this.storeName = storeName);

  @action
  setIsLoading = (isLoading: boolean) => (this.isLoading = isLoading);

  @action
  getStoreInformation = async () => {
    try {
      this.setIsLoading(true);
      let { data } = await StoreInformationFetcher.getStoreInformation();
      this.setAboutText(data.aboutText);
      this.setUsefulLinks(data.usefulLinks);
      this.setOpeningHours(data.openingHours);
      this.setInformation(data.information);
      this.setMediaLinks(data.mediaLinks);
      this.setStoreName(data.storeName);
      this.setOurServices(data.ourServices)
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
