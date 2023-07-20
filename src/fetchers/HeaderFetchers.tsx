import {BaseHttpFetcher} from "./BaseHttpFetcher";
import ClientConfig from "../config/index";

const headerPrefix = "header";

class HeaderFetcher extends BaseHttpFetcher {
    async getMenuListItems(): Promise<any> {
        return await this.get(headerPrefix);
    }
}

export default new HeaderFetcher("/", ClientConfig.apiBaseHost);
