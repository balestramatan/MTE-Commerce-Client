import React from "react";
import { observer } from "mobx-react";
import ourServicesourServicesStyle from "./OurServices.module.scss";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

import rootStores from "../../stores";
import { STORE_INFORMATION_STORE } from "../../stores/consts";
import StoreInformationStore from "../../stores/StoreInformation.store";

interface Iprops {}

const storeInformationStore = rootStores[
  STORE_INFORMATION_STORE
] as StoreInformationStore;

const OurServices = observer((props: Iprops) => {
  const {} = props;

  const { ourServices } = storeInformationStore;

  const renderIconByType = (type: string) => {
    switch (type) {
      case "store":
        return (
          <LocalGroceryStoreIcon
            className={ourServicesourServicesStyle.ourServicesIcons}
          />
        );
      case "service":
        return (
          <HeadsetMicIcon
            className={ourServicesourServicesStyle.ourServicesIcons}
          />
        );
      case "delivery":
        return (
          <DeliveryDiningIcon
            className={ourServicesourServicesStyle.ourServicesIcons}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={ourServicesourServicesStyle.ourServicesContainer}>
      <div className={ourServicesourServicesStyle.ourServicesTitleContainer}>
        <span>השירותים שלנו</span>
      </div>
      <div
        className={`${ourServicesourServicesStyle.ourServicesContextContainer} row`}
      >
        {ourServices?.map((service, i) => (
          <div
            key={i}
            className={`${ourServicesourServicesStyle.ourServicesColumnContainer} col-12 col-md-4`}
          >
            <div className={ourServicesourServicesStyle.iconContainer}>
              {renderIconByType(service?.type)}
            </div>
            <span className={ourServicesourServicesStyle.ourServicesTitleText}>
              {service?.name}
            </span>
            <span
              className={ourServicesourServicesStyle.ourServicesDescriptionText}
            >
              {service?.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
});

export default OurServices;
