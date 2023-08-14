import React from "react";
import dropdownStyle from "./Dropdown.module.scss";

interface Iprops {
  placeholder: string;
  options: string[];
  onClick: any;
}

const Dropdown = (props: Iprops) => {
  const { placeholder, options, onClick } = props;

  return (
    <div>
      <select name="cars" id="cars" className={dropdownStyle.dropdownCustom} defaultValue={""}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
