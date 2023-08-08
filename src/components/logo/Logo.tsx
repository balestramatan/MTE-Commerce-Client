import React from 'react';
import headerStyle from "../header/Header.module.scss";
import {useNavigate} from "react-router-dom";
import smokeLogo from "../../assets/icons/smoke-logo.png";

const Logo = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => navigate("/")
    return (
        <div onClick={handleLogoClick} className={headerStyle.logoContainer}>
            <img className={headerStyle.logo} src={smokeLogo} alt={"logo"}/>
        </div>
    );
};

export default Logo;
