import React from "react";
import {observer} from "mobx-react";
import '../elements/popup/popupStyle.css';
import headerStyle from './Header.module.scss';
import HeaderActions from "./headerActions/HeaderActions";
import Logo from "../logo/Logo";
import Sections from "./sections/Sections";

const Header = observer(() => {
    return (
        <div key={'header'} className={headerStyle.container}>
            <HeaderActions/>
            <Sections/>
            <Logo/>
        </div>
    );
});

export default Header;
