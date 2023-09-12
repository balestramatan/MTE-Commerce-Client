import { action, makeObservable, observable } from 'mobx';
import RegistrationFetcher from '../fetchers/Registration.fetcher';
import ToastUtil from '../utils/ToastUtils';

class RegistrationStore {
  @observable
  email: string = '';

  @observable
  password: string = '';

  @observable
  firstName: string = '';

  @observable
  lastName: string = '';

  @observable
  isLoading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  setEmail = (email: string) => (this.email = email);

  @action
  setPassword = (password: string) => (this.password = password);

  @action
  setFirstName = (firstName: string) => (this.firstName = firstName);

  @action
  setLastName = (lastName: string) => (this.lastName = lastName);

  @action
  setIsLoading = (isLoading: boolean) => (this.isLoading = isLoading);

  @action
  registration = async (email: string, password: string, firstName: string, lastName: string) => {
    try {
      this.setIsLoading(true);
      const { data } = await RegistrationFetcher.registration(email, password, firstName, lastName);
      return data;
    } catch (err: any) {
      console.error(err?.message);
      ToastUtil.error('Some error occurred.');
    } finally {
      this.setIsLoading(false);
    }
  };
}

export default RegistrationStore;
