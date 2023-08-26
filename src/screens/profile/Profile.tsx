import React from "react";
import profileStyle from "./Profile.module.scss";
import LinkButton from "../../components/elements/linkButton/LinkButton";

import rootStores from "../../stores";
import { LOGIN_STORE } from "../../stores/consts";
import LoginStore from "../../stores/Login.store";

const loginStore = rootStores[LOGIN_STORE] as LoginStore;

const Profile = () => {
  const { setIsLoggedIn } = loginStore;
  return (
    <div className={profileStyle.profileContainer}>
      <h2>Profile Page</h2>
      <LinkButton
        onClick={() => {
          setIsLoggedIn(false);
        }}
        title={"התנתק"}
        size="12px"
        disabled={false}
      />
    </div>
  );
};

export default Profile;
