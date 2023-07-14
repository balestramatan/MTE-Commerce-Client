import { LoginConstants, RegistrationConstants, FetchConstants } from "../interfaces/interfaces";

export const fetchConstants: FetchConstants = {
    HOST: "https://mte-commerce-server.vercel.app",
  };
  
export const loginConstants: LoginConstants = {
    ROUTE: "api/authManagement/login"
};

export const registrationConstants: RegistrationConstants = {
    ROUTE: "api/authManagement/registration"
  };