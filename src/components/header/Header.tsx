import React from "react";
import {observer} from "mobx-react";
import '../elements/popup/popupStyle.css';
import headerStyle from './Header.module.scss';

import HeaderActions from "./headerActions/HeaderActions";
import Logo from "../logo/Logo";
import Sections from "./sections/Sections";

interface IProps {
    isCartOpen: boolean;
    setIsCartOpen: Function;
}

const Header = observer((props: IProps) => {
    const {isCartOpen, setIsCartOpen} = props;
    return (
        <div key={'header'} className={headerStyle.container}>
            <HeaderActions isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
            <Sections/>
            <Logo/>
        </div>
    );
});

export default Header;
