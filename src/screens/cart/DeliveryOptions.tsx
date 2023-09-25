import React from 'react';
import cartStyle from "./Cart.module.scss";

import {ReactComponent as DeliveryTruckIcon} from '../../assets/icons/truck-icon.svg';
import {ReactComponent as ShopIcon} from '../../assets/icons/shop-icon.svg';

const DeliveryOptions = ({onDeliveryOptionClick, chosenDelivery}) => {
    return (
        <div className={`${cartStyle.deliveryOptionContainer}`}>
            <div onClick={() => onDeliveryOptionClick('delivery')}
                 className={`${cartStyle.optionBox} ${cartStyle.optionBoxColumn} ${chosenDelivery === 'delivery' ? cartStyle.marked : cartStyle.unMarked}`}>
                <div className={cartStyle.optionsContainer}>
                    <ShopIcon className={cartStyle.optionsIcon}/>
                    <span>איסוף עצמי</span>
                </div>
            </div>
            <div onClick={() => onDeliveryOptionClick('selfPickup')}
                 className={`${cartStyle.optionBox} ${cartStyle.optionBoxColumn} ${chosenDelivery === 'selfPickup' ? cartStyle.marked : cartStyle.unMarked}`}>
                <div className={cartStyle.optionsContainer}>
                    <DeliveryTruckIcon className={cartStyle.optionsIcon}/>
                    <span>משלוח</span>
                </div>
            </div>
        </div>
    );
};

export default DeliveryOptions;
