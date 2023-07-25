import React from 'react';
import headerStyle from "../header/Header.module.scss";
import smokeLogo from "../../assets/icons/smoke-logo.png";

const Logo = () => {
    return (
        <div className={headerStyle.logoContainer}>
            <img className={headerStyle.logo} src={smokeLogo} alt={"logo"}/>
        </div>
    );
};

export default Logo;
