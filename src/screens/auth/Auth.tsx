import React, { useState } from "react";
import { observer } from "mobx-react";
import authStyle from "./Auth.module.scss";
import LoginForm from "../../components/auth/login/LoginForm";
import RegistrationForm from "../../components/auth/registration/RegistrationForm";
import LinkButton from "../../components/elements/linkButton/LinkButton";
import { useNavigate } from 'react-router-dom';
import rootStores from "../../stores";
import { LOGIN_STORE, REGISTRATION_STORE } from "../../stores/consts";
import LoginStore from "../../stores/Login.store";
import RegistrationStore from "../../stores/Registration.store";

const loginStore = rootStores[LOGIN_STORE] as LoginStore;
const registrationStore = rootStores[REGISTRATION_STORE] as RegistrationStore;

interface IProps {}

const Auth = observer((props: IProps) => {
  const {} = props;
  const { login, isLoggedInFailed, setIsLoggedInFailed } = loginStore;
  const { registration } = registrationStore;
  const [isLoginComponent, setIsLoginComponent] = useState(true);
  const [registrationRes, setRegistrationRes] = useState({});
  const navigate = useNavigate();


  const switchComponent = () => {
    setIsLoginComponent(!isLoginComponent);
    setRegistrationRes({});
    setIsLoggedInFailed(false);
  };

  const loginHandle = async (payload: any) => {
    const logInRes = await login(payload.email, payload.password);
    if(logInRes){
      console.log("LOGGED IN")
      console.log("logInRes:",logInRes)
      navigate("/"); 
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
    <div className={authStyle.authContainer}>
      {isLoginComponent ? (
        <LoginForm loginFailed={isLoggedInFailed} loginHandle={loginHandle} />
      ) : (
        <RegistrationForm
          registrationRes={registrationRes}
          registrationHandle={registrationHandle}
        />
      )}
      <div className={authStyle.authSwitchComponentContainer}>
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
