import { action, makeObservable, observable } from "mobx";
import ToastUtil from "../utils/ToastUtils";
import FiltersFetcher from "../fetchers/Filters.fetcher";
import { Filters } from "../interfaces/interfaces";

class StoreInformationStore {
  @observable
  filters: Filters[] = [];

  @observable
  isLoading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  setFilters = (filters: []) => (this.filters = filters);

  @action
  setIsLoading = (isLoading: boolean) => (this.isLoading = isLoading);

  @action
  getFiltersByParentId = async (parentId: string) => {
    try {
      this.setIsLoading(true);
      let { data } = await FiltersFetcher.getFiltersByParentId(parentId);
      this.setFilters(data);
    } catch (err: any) {
      console.error(err?.message);
      ToastUtil.error("Some error occurred.");
    } finally {
      this.setIsLoading(false);
    }
  };
}

export default StoreInformationStore;
