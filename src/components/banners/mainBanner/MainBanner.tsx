import React from 'react';
import mainBannerStyle from './MainBanner.module.scss';
const banner = require('./mainBanner.jpg');
const MainBanner = () => {
    return (
        <div className={mainBannerStyle.container}>
            <img src={banner} alt={'main-banner'} className={mainBannerStyle.banner}/>
        </div>
    );
};

export default MainBanner;
