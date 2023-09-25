import React, { useState } from 'react';
import sideFilterstyle from './SideFilters.module.scss';
import { Drawer } from 'antd';
import Filter from '../filter/Filter';

interface Iprops {
    sectionId: string;
}

const SideFilters = (props: Iprops) => {
    const { sectionId } = props;
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    const onFiltersClickHandler = () => {
        setIsFiltersOpen(!isFiltersOpen);
    };

    return (
        <>
            <div className={`${sideFilterstyle.filterContainer} row`} onClick={onFiltersClickHandler}>
                סינון
            </div>
            <Drawer title='סינון תוצאות' placement='right' onClose={onFiltersClickHandler} open={isFiltersOpen}>
                <Filter sectionId={sectionId} />
            </Drawer>
        </>
    );
};

export default SideFilters;
