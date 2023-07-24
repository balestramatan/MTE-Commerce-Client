import React, { useEffect, useState } from "react";
import layoutStyle from "./Footer.module.scss";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { SocialIcon } from "react-social-icons";

import rootStores from "../../stores";
import { STORE_INFORMATION_STORE } from "../../stores/consts";
import StoreInformationStore from "../../stores/StoreInformation.store";

interface IProps {}

const storeInformationStore = rootStores[
  STORE_INFORMATION_STORE
] as StoreInformationStore;

const Footer = (props: IProps) => {
  const {} = props;
  const {
    getStoreInformation,
    aboutText,
    mediaLinks,
    information,
    openingHours,
    storeName
  } = storeInformationStore;
  const [isLoading, setisLoading] = useState(true);

  const renderIconByType = (type: string) => {
    switch (type) {
      case "address":
        return <HomeOutlinedIcon className={layoutStyle.footerIcon} />;
      case "phone":
        return <LocalPhoneOutlinedIcon className={layoutStyle.footerIcon} />;
      case "email":
        return <EmailOutlinedIcon className={layoutStyle.footerIcon} />;
      default:
        return null;
    }
  };

  const fetchStoreInformation = async () => {
    await getStoreInformation();
    setisLoading(false);
  };

  useEffect(() => {
    fetchStoreInformation();
  }, []);


  if(isLoading){
    return <div>Loading</div>
  }
  return (
    <footer className={layoutStyle.footerContainer}>
      <div>
        <div className={layoutStyle.storeNameContainer}>
          <h3>{storeName}</h3>
        </div>
        <Grid container columns={12}>
          <Grid className={layoutStyle.footerColumn} item xs={4}>
            <div>
              <h6>קצת עלינו</h6>
              <p>{aboutText}</p>
              <div className={layoutStyle.footerSocialContainer}>
                {mediaLinks?.map((media, index) => (
                  <SocialIcon
                    key={index}
                    className={layoutStyle.footerSocialIcon}
                    url={media.url}
                  />
                ))}
              </div>
            </div>
          </Grid>
          <Grid className={layoutStyle.footerColumn} item xs={4}>
            <div>
              <h6>יצירת קשר</h6>
              {information?.map((element, index) => (
                <div key={index}>
                  <span className={layoutStyle.footerIconSpan}>
                    {renderIconByType(element.type)}
                  </span>
                  <span>{element.value}</span>
                </div>
              ))}
            </div>
          </Grid>
          <Grid className={layoutStyle.footerColumn} item xs={4}>
            <div>
              <h6>שעות פתיחה</h6>
              {openingHours?.map((info, index) => (
                <div key={index}>
                  <p>
                    {info.days}: {info.hours}
                  </p>
                  {index !== openingHours?.length - 1 ? (
                    <Divider className={layoutStyle.footerDivider} />
                  ) : null}
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={layoutStyle.footerCopyright}>
        <a href="https://mdbootstrap.com/">MTECommerce</a> 2023 Copyright ©
      </div>
    </footer>
  );
};

export default Footer;
