import {BaseHttpFetcher} from "./BaseHttpFetcher";
import ClientConfig from "../config/index";

const sectionsPrefix = "sections";

class SectionsFetcher extends BaseHttpFetcher {
    async getSections(): Promise<any> {
        return await this.get(`sectionsManagement/${sectionsPrefix}`);
    }

    async createSection(categoryName: string): Promise<any> {
        return await this.post(sectionsPrefix, {categoryName});
    }

    async updateSection(categoryId: string, categoryName: string): Promise<any> {
        return await this.put(sectionsPrefix, {categoryId, categoryName});
    }

    async deleteSection(sectionId: string): Promise<any> {
        return await this.delete(`${sectionsPrefix}/${sectionId}}`);
    }
}

export default new SectionsFetcher("/", ClientConfig.apiBaseHost);
