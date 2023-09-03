import React, {useEffect} from "react";
import {observer} from "mobx-react";
import footerStyle from "./Footer.module.scss";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import {SocialIcon} from "react-social-icons";

import rootStores from "../../stores";
import {STORE_INFORMATION_STORE} from "../../stores/consts";
import StoreInformationStore from "../../stores/StoreInformation.store";

const storeInformationStore = rootStores[
    STORE_INFORMATION_STORE
    ] as StoreInformationStore;

const Footer = observer(() => {
    const {
        getStoreInformation,
        aboutText,
        mediaLinks,
        information,
        openingHours
    } = storeInformationStore;

    const renderIconByType = (type: string) => {
        switch (type) {
            case "address":
                return <HomeOutlinedIcon className={footerStyle.footerIcon}/>;
            case "phone":
                return <LocalPhoneOutlinedIcon className={footerStyle.footerIcon}/>;
            case "email":
                return <EmailOutlinedIcon className={footerStyle.footerIcon}/>;
            default:
                return null;
        }
    };


    useEffect(() => {
        const fetchStoreInformation = async () => await getStoreInformation();

        fetchStoreInformation().then(() => console.log('fetched store information...'));
    }, []);

    return (
        <div id={'footer'} className={footerStyle.footerContainer}>
            <div>
                <Grid container columns={12}>
                    <Grid className={footerStyle.footerColumn} item xs={4}>
                        <div>
                            <div>
                                <span className={footerStyle.title}>קצת עלינו</span>
                            </div>
                            <span className={footerStyle.contentText}>{aboutText}</span>
                            <div className={footerStyle.footerSocialContainer}>
                                {mediaLinks?.map((media, index) => (
                                    <SocialIcon
                                        key={index}
                                        className={footerStyle.footerSocialIcon}
                                        url={media.url}
                                    />
                                ))}
                            </div>
                        </div>
                    </Grid>
                    <Grid className={footerStyle.footerColumn} item xs={4}>
                        <div>
                            <span className={footerStyle.title}>יצירת קשר</span>
                            {information?.map((element, index) => (
                                <div key={index}>
                  <span className={footerStyle.footerIconSpan}>
                    {renderIconByType(element.type)}
                  </span>
                                    <span className={footerStyle.contentText}>{element.value}</span>
                                </div>
                            ))}
                        </div>
                    </Grid>
                    <Grid className={footerStyle.footerColumn} item xs={4}>
                        <div>
                            <span className={footerStyle.title}>שעות פתיחה</span>
                            {openingHours?.map((info, index) => (
                                <div key={index}>
                                    <span className={footerStyle.contentText}>
                                        {info.days}: {info.hours}
                                    </span>
                                    {index !== openingHours?.length - 1 ? (
                                        <Divider className={footerStyle.footerDivider}/>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className={footerStyle.footerCopyright}>
                <a className={footerStyle.contentText} href="https://mdbootstrap.com/">MTECommerce</a> <span
                className={footerStyle.contentText}>2023 Copyright ©</span>
            </div>
        </div>
    );
});

export default Footer;
