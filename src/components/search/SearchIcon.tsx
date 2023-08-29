import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import headerActionsStyle from "../header/headerActions/HeaderActions.module.scss";

const Search = () => {
    const handleLogoClick = () => {
    }

    return (
        <SearchIcon
            className={headerActionsStyle.searchIcon}
            onClick={handleLogoClick}
        />
    );
};

export default Search;
