import {BaseHttpFetcher} from "./BaseHttpFetcher";
import ClientConfig from "../config/index";

const productsPrefix = "productsManagement";

class ProductsFetchers extends BaseHttpFetcher {
    async getProductsByFilters(params: any): Promise<any> {
        return await this.get(`${productsPrefix}/products`, {}, params);
    }

    async getHotProducts(): Promise<any> {
        return await this.get(`${productsPrefix}/hotProducts`);
    }

    async getProductsOnSale(): Promise<any> {
        return await this.get(`${productsPrefix}/onSale`);
    }
}

export default new ProductsFetchers("/", ClientConfig.apiBaseHost);
