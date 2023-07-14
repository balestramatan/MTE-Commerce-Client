import React, { useState } from "react";
import layoutStyle from "./Auth.module.scss";
import LoginForm from "../../components/auth/login/LoginForm";
import RegistrationForm from "../../components/auth/registration/RegistrationForm";
import LinkButton from "../../components/Elements/LinkButton/LinkButton";
import LoginApi from "../../api/fetchers/auth/Login"
import RegistrationApi from "../../api/fetchers/auth/Registration"

interface Iprops {}

const Auth = (props: Iprops) => {
  const {} = props;
  const [isLoginComponent, setIsLoginComponent] = useState(true);
  const [loginFailed,setLoginFailed] = useState(false)
  const [registrationRes,setRegistrationRes] = useState({})

  const switchComponent = () => {
    setIsLoginComponent(!isLoginComponent);
    setLoginFailed(false)
    setRegistrationRes({})
  };

  const loginHandle = async (payload: object) => {
    try {
      setLoginFailed(false)
      const loginRes = await LoginApi.login(payload)
      console.log("loginRes:",loginRes)      
    } catch (error) {
      setLoginFailed(true)
    }
  };

  const registrationHandle = async (payload: object) => {
    try {
      const registrationRes = await RegistrationApi.registration(payload)
      setRegistrationRes(registrationRes)
    } catch (error) {

    }
  };

  return (
    <div className={layoutStyle.authContainer}>
      {isLoginComponent ? <LoginForm loginFailed={loginFailed} loginHandle={loginHandle} /> : <RegistrationForm registrationRes={registrationRes} registrationHandle={registrationHandle} />}
      <div className={layoutStyle.authSwitchComponentContainer}>
        <LinkButton
          onClick={switchComponent}
          title={isLoginComponent ? "יצירת חשבון" : "התחברות"}
          size="12px"
          disabled = {false}
        />
      </div>
    </div>
  );
};

export default Auth;
