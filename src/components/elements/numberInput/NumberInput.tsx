import React, { useEffect, useState } from "react";
import numberInputStyle from "./NumberInput.module.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { observer } from "mobx-react";
import Product from "../../../models/Product.model";

import rootStores from "../../../stores";
import { CART_STORE } from "../../../stores/consts";
import CartStore from "../../../stores/Cart.store";

const cartStoreStore = rootStores[CART_STORE] as CartStore;

interface IProps {
  product: Product;
}

const NumberInput = observer((props: IProps) => {
  const { product } = props;
  const { getProductQuantity, isCartUpdated, addProduct ,decreaseProductQuantity } = cartStoreStore;

  const [quantity, setQuantity ] = useState(0);


  const handleIncrease = () => {
    addProduct(product)
  };

  const handleDecrease = () => {
    decreaseProductQuantity(product._id)
  };

  useEffect(() => {
    setQuantity(getProductQuantity(product._id));
  }, [isCartUpdated]);
  
  return (
    <div className={`${numberInputStyle.numberInputContainer} row`}>
      <div
        onClick={handleIncrease}
        className={`${numberInputStyle.numberInputPlusContainer} col-3`}
      >
        <AddIcon className={numberInputStyle.numberInputIcon} />
      </div>
      <div className={`${numberInputStyle.numberInputCounterContainer} col-3`}>
        {quantity}
      </div>
      <div
        onClick={handleDecrease}
        className={`${numberInputStyle.numberInputMinusContainer} col-3`}
      >
        <RemoveIcon className={numberInputStyle.numberInputIcon} />
      </div>
    </div>
  );
});

export default NumberInput;
