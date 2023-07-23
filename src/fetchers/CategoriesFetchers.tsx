import {BaseHttpFetcher} from "./BaseHttpFetcher";
import ClientConfig from "../config/index";

const categoriesPrefix = "categories";

class CategoriesFetcher extends BaseHttpFetcher {
    async getCategories(): Promise<any> {
        return await this.get(categoriesPrefix);
    }

    async createCategory(categoryName: string): Promise<any> {
        return await this.post(categoriesPrefix, {categoryName});
    }

    async updateCategory(categoryId: string, categoryName: string): Promise<any> {
        return await this.put(categoriesPrefix, {categoryId, categoryName});
    }

    async deleteCategories(categoryId: string): Promise<any> {
        return await this.delete(`${categoriesPrefix}/${categoryId}}`);
    }
}

export default new CategoriesFetcher("/", ClientConfig.apiBaseHost);
