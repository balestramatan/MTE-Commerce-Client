import React from 'react';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonIcon from '@mui/icons-material/Person';
import headerActionsStyle from './HeaderActions.module.scss';
import {useNavigate} from "react-router-dom";
import Cart from "../../cart/Cart";

interface IProps {
    isCartOpen: boolean;
    setIsCartOpen: Function;
}

const HeaderActions = (props: IProps) => {
    const {isCartOpen, setIsCartOpen} = props;

    const navigate = useNavigate();

    const handlePersonClick = () => navigate("/auth")
    const handleCartClick = () => setIsCartOpen(!isCartOpen);

    return (
        <div className={headerActionsStyle.container}>
            <Cart isCartOpen={isCartOpen} onClose={() => setIsCartOpen(false)}/>
            <ShoppingBagOutlinedIcon className={headerActionsStyle.shoppingBagIcon} onClick={handleCartClick}/>
            <PersonIcon className={headerActionsStyle.personIcon} onClick={handlePersonClick}/>
        </div>
    );
};

export default HeaderActions;
