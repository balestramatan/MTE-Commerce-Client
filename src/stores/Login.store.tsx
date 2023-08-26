import {action, makeObservable, observable} from "mobx";
import LoginFetcher from "../fetchers/Login.fetcher";
import ToastUtil from "../utils/ToastUtils";

class LoginStore {
    @observable
    email: string = "";

    @observable
    password: string = "";

    @observable
    accessToken: string = "";

    @observable
    isLoggedIn: boolean = false;

    @observable
    isLoggedInFailed: boolean = false;

    @observable
    isLoading: boolean = false;

    constructor() {
        makeObservable(this);
    }

    @action
    setEmail = (email: string) => this.email = email;

    @action
    setPassword = (password: string) => this.password = password;

    @action
    setIsLoggedIn = (isLoggedIn: boolean) => this.isLoggedIn = isLoggedIn;

    @action
    setIsLoggedInFailed = (isLoggedInFailed: boolean) => this.isLoggedInFailed = isLoggedInFailed;

    @action
    setIsLoading = (isLoading: boolean) => this.isLoading = isLoading;

    @action
    setAccessToken = (accessToken: string) => this.accessToken = accessToken;

    @action
    login = async (email: string, password: string) => {
        try {
            this.setIsLoading(true);
            const {data} = await LoginFetcher.login(email, password);
            this.setAccessToken(data.access_token);
            this.setIsLoggedIn(true);
            this.setIsLoggedInFailed(false)
            return data
        } catch (err: any) {
            this.setIsLoggedInFailed(true)
            console.error(err?.message);
            ToastUtil.error("Some error occurred.");
        } finally {
            this.setIsLoading(false);
        }
    };

    @action
    logout = () => {
        this.setIsLoggedIn(false);
    };
}

export default LoginStore;
