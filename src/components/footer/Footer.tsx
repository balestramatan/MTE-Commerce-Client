import React from "react";
import layoutStyle from "./Footer.module.scss";
import Grid from "@mui/material/Grid";
import {IStore} from "../../interfaces/interfaces"
import Divider from "@mui/material/Divider";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";


interface Iprops {
  store: IStore
}

const Footer = (props: Iprops) => {
  const { store } = props;

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

  return (
    <footer className={layoutStyle.footerContainer}>
      <div>
        <div className={layoutStyle.storeNameContainer}>
          <h3>סמוקטוק</h3>
        </div>
        <Grid container columns={12}>
          <Grid className={layoutStyle.footerColumn} item xs={4}>
            <div>
              <h6>קצת עלינו</h6>
              <p>{store.aboutText}</p>
            </div>
          </Grid>
          <Grid className={layoutStyle.footerColumn} item xs={4}>
            <div>
              <h6>יצירת קשר</h6>
              {store.storeInformation.map((element, index) => (
                <div key={index}>
                  <span className={layoutStyle.footerIconSpan}>{renderIconByType(element.type)}</span>
                  <span>{element.value}</span>
                </div>
              ))}
            </div>
          </Grid>
          <Grid className={layoutStyle.footerColumn} item xs={4}>
            <div>
              <h6>שעות פתיחה</h6>
              {store.openingHours.map((info, index) => (
                <div key={index}>
                  <p>{info}</p>
                  <Divider
                    className={layoutStyle.footerDivider}
                    variant="middle"
                  />
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
