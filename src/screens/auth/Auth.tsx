import React, { useState } from "react";
import { observer } from "mobx-react";
import layoutStyle from "./Auth.module.scss";
import LoginForm from "../../components/auth/login/LoginForm";
import RegistrationForm from "../../components/auth/registration/RegistrationForm";
import LinkButton from "../../components/elements/linkButton/LinkButton";

import rootStores from "../../stores";
import { LOGIN_STORE, REGISTRATION_STORE } from "../../stores/consts";
import LoginStore from "../../stores/Login.store";
import RegistrationStore from "../../stores/Registration.store";

const loginStore = rootStores[LOGIN_STORE] as LoginStore;
const registrationStore = rootStores[REGISTRATION_STORE] as RegistrationStore;

interface IProps {}

const Auth = observer((props: IProps) => {
  const {} = props;
  const { login } = loginStore;
  const { registration } = registrationStore;
  const [isLoginComponent, setIsLoginComponent] = useState(true);
  const [loginFailed, setLoginFailed] = useState(false);
  const [registrationRes, setRegistrationRes] = useState({});

  const switchComponent = () => {
    setIsLoginComponent(!isLoginComponent);
    setLoginFailed(false);
    setRegistrationRes({});
  };

  const loginHandle = async (payload: any) => {
    try {
      setLoginFailed(false);
      await login(payload.email, payload.password);
    } catch (error) {
      setLoginFailed(true);
    }
  };

  const registrationHandle = async (payload: any) => {
    try {
      const registrationRes = await registration(
        payload.email,
        payload.password,
        payload.firstName,
        payload.lastName
      );
      setRegistrationRes(registrationRes);
    } catch (error) {}
  };

  return (
    <div className={layoutStyle.authContainer}>
      {isLoginComponent ? (
        <LoginForm loginFailed={loginFailed} loginHandle={loginHandle} />
      ) : (
        <RegistrationForm
          registrationRes={registrationRes}
          registrationHandle={registrationHandle}
        />
      )}
      <div className={layoutStyle.authSwitchComponentContainer}>
        <LinkButton
          onClick={switchComponent}
          title={isLoginComponent ? "יצירת חשבון" : "התחברות"}
          size="12px"
          disabled={false}
        />
      </div>
    </div>
  );
});

export default Auth;
