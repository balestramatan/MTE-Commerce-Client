import React, {useState} from "react";
import filterStyle from "./Filter.module.scss";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Slider from "@mui/material/Slider";

const Filter = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    const handleChange = (curState, setState) => {
        setState(!curState);
    };

    function priceValue(value: number) {
        console.log(value);
        return `${value}₪`;
    }

    const marks = [
        {
            value: 0,
            label: "0₪",
        },
        {
            value: 100,
            label: "1000₪",
        },
    ];

    return (
        <div>
            <ListItemButton
                style={{textAlign: "right"}}
                onClick={() => {
                    handleChange(open2, setOpen2);
                }}
            >
                <ListItemText primary="מלאי"/>
                {open2 ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
                <div className={filterStyle.checkboxContainer}>
                    <input
                        className={filterStyle.filterCheckbox}
                        type="checkbox"
                        id="inStock"
                    />
                    <label className={filterStyle.filterLabel} htmlFor="inStock">
                        זמין במלאי
                    </label>
                </div>

                <div className={filterStyle.checkboxContainer}>
                    <input
                        className={filterStyle.filterCheckbox}
                        type="checkbox"
                        id="outOfStock"
                    />
                    <label className={filterStyle.filterLabel} htmlFor="outOfStock">
                        לא זמין במלאי
                    </label>
                </div>
            </Collapse>
            <ListItemButton
                style={{textAlign: "right"}}
                onClick={() => {
                    handleChange(open, setOpen);
                }}
            >
                <ListItemText primary="מחיר"/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <div className={filterStyle.filterSliderContainer}>
                    <Slider
                        getAriaValueText={priceValue}
                        defaultValue={[0, 100]}
                        marks={marks}
                    />
                </div>

            </Collapse>
        </div>
    );
};

export default Filter;
