import React, { useEffect, useState } from "react";
import numberInputStyle from "./NumberInput.module.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const NumberInput = () => {
  const [counter, setCounter] = useState(1);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleDecrease = () => {
    if (counter != 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className={`${numberInputStyle.numberInputContainer} row`}>
      <div
        onClick={handleIncrease}
        className={`${numberInputStyle.numberInputPlusContainer} col-3`}
      >
        <AddIcon className={numberInputStyle.numberInputIcon} />
      </div>
      <div className={`${numberInputStyle.numberInputCounterContainer} col-3`}>
        {counter}
      </div>
      <div onClick={handleDecrease} className={`${numberInputStyle.numberInputMinusContainer} col-3`}>
        <RemoveIcon className={numberInputStyle.numberInputIcon} />
      </div>
    </div>
  );
};

export default NumberInput;
