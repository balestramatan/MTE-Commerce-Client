import { BaseHttpFetcher } from "./BaseHttpFetcher";
import ClientConfig from "../config/index";

const storeInformationPrefix = "authManagement";

class LoginFetcher extends BaseHttpFetcher {
  async registration(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Promise<any> {
    return await this.post(`${storeInformationPrefix}/registration`, {
      email,
      password,
      firstName,
      lastName,
    });
  }
}

export default new LoginFetcher("/", ClientConfig.apiBaseHost);
