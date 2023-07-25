import React from 'react';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonIcon from '@mui/icons-material/Person';
import headerActionsStyle from './HeaderActions.module.scss';

const HeaderActions = () => {
    // const navigate = useNavigate();

    const handlePersonClick = () => {
        // navigate("/auth")
    }

    return (
        <div className={headerActionsStyle.container}>
            <ShoppingBagOutlinedIcon className={headerActionsStyle.shoppingBagIcon}/>
            <PersonIcon className={headerActionsStyle.personIcon} onClick={handlePersonClick}/>
        </div>
    );
};

export default HeaderActions;
