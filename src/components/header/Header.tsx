import React from "react";
import {observer} from "mobx-react";
import '../elements/popup/popupStyle.css';
import headerStyle from './Header.module.scss';

import HeaderActions from "./headerActions/HeaderActions";
import Logo from "../logo/Logo";
import Sections from "./sections/Sections";
import {useNavigate} from "react-router-dom";
import CategoryModel from "../../models/Category.model";

const Header = observer(() => {
    const navigate = useNavigate();

    const onCategoryClick = (category: CategoryModel) => navigate(`products-page/${category.categoryName}`);

    return (
        <div key={'header'} className={headerStyle.container}>
            <HeaderActions/>
            <Sections onCategoryClick={onCategoryClick}/>
            <Logo/>
        </div>
    );
});

export default Header;
