import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonIcon from "@mui/icons-material/Person";
import headerActionsStyle from "./HeaderActions.module.scss";
import { useNavigate } from "react-router-dom";
import Cart from "../../cart/Cart";

import rootStores from "../../../stores";
import { CART_STORE, LOGIN_STORE } from "../../../stores/consts";
import LoginStore from "../../../stores/Login.store";
import CartStore from "../../../stores/Cart.store";
import { observer } from "mobx-react";

const cartStore = rootStores[CART_STORE] as CartStore;
const loginStore = rootStores[LOGIN_STORE] as LoginStore;

const HeaderActions = observer(() => {
  const navigate = useNavigate();

  const { isOpen, setCartIsOpen } = cartStore;
  const { isLoggedIn } = loginStore;

  const handlePersonClick = () => isLoggedIn ? navigate("/profile") : navigate("/auth");
  const handleCartClick = () => setCartIsOpen(!isOpen);

  return (
    <div className={headerActionsStyle.container}>
      <Cart isCartOpen={isOpen} onClose={() => setCartIsOpen(false)} />
      <ShoppingBagOutlinedIcon
        className={headerActionsStyle.shoppingBagIcon}
        onClick={handleCartClick}
      />
      <PersonIcon
        className={headerActionsStyle.personIcon}
        onClick={handlePersonClick}
      />
    </div>
  );
});

export default HeaderActions;
