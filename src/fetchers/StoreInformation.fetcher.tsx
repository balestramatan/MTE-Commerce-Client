import {BaseHttpFetcher} from "./BaseHttpFetcher";
import ClientConfig from "../config/index";

const storeInformationPrefix = "storeManagement";

class StoreInformationFetchers extends BaseHttpFetcher {
    async getStoreInformation(): Promise<any> {
        return await this.get(`${storeInformationPrefix}/info`);
    }
}

export default new StoreInformationFetchers("/", ClientConfig.apiBaseHost);
