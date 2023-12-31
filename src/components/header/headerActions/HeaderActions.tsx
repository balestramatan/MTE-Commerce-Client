import React from 'react';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import PersonIcon from '@mui/icons-material/Person';
import headerActionsStyle from './HeaderActions.module.scss';
import { useNavigate } from 'react-router-dom';
import Cart from '../../cart/Cart';

import rootStores from '../../../stores';
import { CART_STORE, LOGIN_STORE } from '../../../stores/consts';
import LoginStore from '../../../stores/Login.store';
import CartStore from '../../../stores/Cart.store';
import { observer } from 'mobx-react';

const cartStore = rootStores[CART_STORE] as CartStore;
const loginStore = rootStores[LOGIN_STORE] as LoginStore;

const HeaderActions = observer(() => {
  const navigate = useNavigate();

  const { isOpen, setCartIsOpen, products } = cartStore;
  const { isLoggedIn } = loginStore;

  const handlePersonClick = () => navigate(isLoggedIn ? '/profile' : '/auth');
  const handleCartClick = () => setCartIsOpen(!isOpen);

  return (
    <div className={headerActionsStyle.container}>
      <PersonIcon className={headerActionsStyle.personIcon} onClick={handlePersonClick} />
      <Cart isCartOpen={isOpen} onClose={() => setCartIsOpen(false)} />
      {products.length > 0 ? (
        <ShoppingBagTwoToneIcon className={headerActionsStyle.shoppingBagIcon} onClick={handleCartClick} />
      ) : (
        <ShoppingBagOutlinedIcon className={headerActionsStyle.shoppingBagIcon} onClick={handleCartClick} />
      )}
    </div>
  );
});

export default HeaderActions;
