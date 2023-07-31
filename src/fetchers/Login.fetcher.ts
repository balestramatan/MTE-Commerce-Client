import { BaseHttpFetcher } from "./BaseHttpFetcher";
import ClientConfig from "../config/index";

const storeInformationPrefix = "authManagement";

class LoginFetcher extends BaseHttpFetcher {
  async login(email: string, password: string): Promise<any> {
    return await this.post(`${storeInformationPrefix}/login`, {
      email,
      password,
    });
  }
}

export default new LoginFetcher("/", ClientConfig.apiBaseHost);
