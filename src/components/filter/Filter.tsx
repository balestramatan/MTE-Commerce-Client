import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import filterStyle from "./Filter.module.scss";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import rootStores from "../../stores";
import { FILTERS_STORE } from "../../stores/consts";
import FilterStore from "../../stores/Filters.store";
import { FilterOptions, Filters } from "../../interfaces/interfaces";

const filterStore = rootStores[FILTERS_STORE] as FilterStore;

interface Iprops {
  sectionId: string
}

const Filter = observer((props: Iprops) => {
  const {sectionId} = props;
  const { getFiltersByParentId, filters } = filterStore;
  const [open2, setOpen2] = useState(false);



  useEffect(() => {
    const fetchFilters = async () => await getFiltersByParentId(sectionId);
    fetchFilters().then(() => console.log("Fetched Filters..."));
  }, [sectionId]);

  return (
    <div>
      {filters?.map((filter: Filters) => {
        return (
          <>
            <ListItemButton
              style={{ textAlign: "right" }}
              onClick={() => {
                setOpen2(!open2)
              }}
            >
              <ListItemText primary={filter?.filterName} />
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              {filter?.filterOptions?.map((option: FilterOptions, i) => {
                return (
                  <div key={i} className={filterStyle.checkboxContainer}>
                    <input
                      className={filterStyle.filterCheckbox}
                      type="checkbox"
                      id={option?.label}
                    />
                    <label
                      className={filterStyle.filterLabel}
                      htmlFor={option?.label}
                    >
                      {option?.name}
                    </label>
                  </div>
                );
              })}
            </Collapse>
          </>
        );
      })}
    </div>
  );
});

export default Filter;
