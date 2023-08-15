import { BaseHttpFetcher } from "./BaseHttpFetcher";
import ClientConfig from "../config/index";

const productsPrefix = "productsManagement";

class ProductsFetchers extends BaseHttpFetcher {
  async getProductsByFilters(params: any): Promise<any> {
    return await this.get(`${productsPrefix}/products`, {}, params);
  }
}

export default new ProductsFetchers("/", ClientConfig.apiBaseHost);
