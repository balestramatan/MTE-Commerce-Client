import { action, computed, observable } from "mobx";
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
  aboutText!: string;

  @observable
  usefulLinks!: UsefulLinks;

  @observable
  openingHours!: OpeningHours;

  @observable
  information!: Information;

  @observable
  mediaLinks!: MediaLinks;

  @observable
  isLoading: boolean = false;

  @action
  setAboutText = (aboutText: string) => (this.aboutText = aboutText);

  @action
  setUsefulLinks = (usefulLinks: UsefulLinks) =>
    (this.usefulLinks = usefulLinks);

  @action
  setOpeningHours = (openingHours: OpeningHours) =>
    (this.openingHours = openingHours);

  @action
  setInformation = (information: Information) =>
    (this.information = information);

  @action
  setMediaLinks = (mediaLinks: MediaLinks) => (this.mediaLinks = mediaLinks);

  @action
  setIsLoading = (isLoading: boolean) => (this.isLoading = isLoading);

  @action
  getStoreInformation = async () => {
    try {
      this.isLoading = true;
      let { storeInformation } = await StoreInformationFetcher.getStoreInformation();
      this.setAboutText(storeInformation.aboutText);
      this.setUsefulLinks(storeInformation.usefulLinks);
      this.setOpeningHours(storeInformation.openingHours);
      this.setInformation(storeInformation.storeInformation);
      this.setMediaLinks(storeInformation.mediaLinks);
    } catch (err: any) {
      console.error(err?.message);
      ToastUtil.error("Some error occurred.");
    } finally {
      this.isLoading = false;
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
