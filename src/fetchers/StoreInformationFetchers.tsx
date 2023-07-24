import {BaseHttpFetcher} from "./BaseHttpFetcher";
import ClientConfig from "../config/index";

const storeInformationPrefix = "storeManagement";

class StoreInformationFetchers extends BaseHttpFetcher {
    async getStoreInformation(): Promise<any> {
        return await this.get(`${storeInformationPrefix}/info`);
    }
    /*
    async updateCategory(categoryId: string, categoryName: string): Promise<any> {
        return await this.put(storeInformationPrefix, {categoryId, categoryName});
    }
    */
}

export default new StoreInformationFetchers("/", ClientConfig.apiBaseHost);
