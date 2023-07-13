import React, { useState } from "react";
import layoutStyle from "./Auth.module.scss";
import LoginForm from "../../components/auth/login/LoginForm";
import RegistrationForm from "../../components/auth/registration/RegistrationForm";
import LinkButton from "../../components/Elements/LinkButton/LinkButton";

interface Iprops {}

const Auth = (props: Iprops) => {
  const {} = props;
  const [isCreateAccountButton, setIsCreateAccountButton] = useState(false);

  const switchButton = () => {
    setIsCreateAccountButton(!isCreateAccountButton);
  };

  return (
    <div className={layoutStyle.authContainer}>
      {isCreateAccountButton ? <LoginForm /> : <RegistrationForm />}
      <div className={layoutStyle.authSwitchButtonContainer}>
        <LinkButton
          onClick={switchButton}
          title={isCreateAccountButton ? "יצירת חשבון" : "התחברות"}
          size="12px"
        />
      </div>
    </div>
  );
};

export default Auth;
