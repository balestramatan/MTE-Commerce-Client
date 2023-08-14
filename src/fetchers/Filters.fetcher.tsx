import { BaseHttpFetcher } from "./BaseHttpFetcher";
import ClientConfig from "../config/index";

const filtersPrefix = "filtersManagement";

class FiltersFetchers extends BaseHttpFetcher {
  async getFiltersByParentId(parentId: string): Promise<any> {
    return await this.get(`${filtersPrefix}/filters?id=${parentId}`);
  }
}

export default new FiltersFetchers("/", ClientConfig.apiBaseHost);
