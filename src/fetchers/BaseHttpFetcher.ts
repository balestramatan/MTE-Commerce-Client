import axios, {AxiosInstance} from "axios";
import https from "https-browserify";
import ClientConfig from "../config";

export class BaseHttpFetcher {
    protected axios: AxiosInstance;

    constructor(baseRoute: string, fetcherBaseURL?: string) {
        let baseApiUrl = fetcherBaseURL || ClientConfig.apiBaseHost;
        baseApiUrl += `/${baseRoute}`;
        this.axios = axios.create({
            baseURL: baseApiUrl,
            httpsAgent: new https.Agent({rejectUnauthorized: false})
        });
    }

    public get<V>(url: string, headers?: object, params?: object): Promise<any> {
        return this.axios.get(url, {params, headers});
    }

    public post<V>(url: string, body?: any, headers?: object, params?: object): Promise<any> {
        return this.axios.post(url, body, {params, headers});
    }

    public put(url: string, body?: any, headers?: object): Promise<any> {
        return this.axios.put(url, body, {headers});
    }

    public delete(url: string, headers?: object): Promise<any> {
        return this.axios.delete(url, {headers});
    }
}
