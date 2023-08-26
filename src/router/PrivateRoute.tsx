import React from "react";
import Auth from "../screens/auth/Auth";
import { observer } from "mobx-react";

import rootStores from "../stores";
import { LOGIN_STORE } from "../stores/consts";
import LoginStore from "../stores/Login.store";

interface IProps {
  element: any;
}

const loginStore = rootStores[LOGIN_STORE] as LoginStore;

const PrivateRoute = observer((props: IProps) => {
  const { element } = props;
  const { isLoggedIn } = loginStore;


  if (!isLoggedIn) {
    return <Auth />;
  }

  return element;
});

export default PrivateRoute;
