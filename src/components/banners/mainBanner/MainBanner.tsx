import React from 'react';
import mainBannerStyle from './MainBanner.module.scss';
import rootStores from "../../../stores";
import {STORE_INFORMATION_STORE} from "../../../stores/consts";
import StoreInformationStore from "../../../stores/StoreInformation.store";

const storeInformationStore = rootStores[STORE_INFORMATION_STORE] as StoreInformationStore;

const MainBanner = () => {
    const {mainBannerUrl} = storeInformationStore;

    return (
        <div className={mainBannerStyle.container}>
            <img src={mainBannerUrl} alt={'main-banner'} className={mainBannerStyle.banner}/>
        </div>
    );
};

export default MainBanner;
