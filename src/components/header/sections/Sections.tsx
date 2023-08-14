import React, {useEffect, useRef, useState} from 'react';
import headerStyle from "../Header.module.scss";
import Category from "../../../models/Category.model";

import rootStores from "../../../stores";
import {SECTIONS_STORE} from '../../../stores/consts'
import SectionsStore from "../../../stores/Sections.store";
import {observer} from "mobx-react";
import Section from "./Section";
import CategoryModel from "../../../models/Category.model";

const categoriesStore = rootStores[SECTIONS_STORE] as SectionsStore;

interface IProps {
    onCategoryClick: (c: CategoryModel) => void;
}

const Sections = observer((props: IProps) => {
    const [categoriesToShow, setCategoriesToShow] = useState<Category[]>([]);
    const [showPopup, setPopup] = useState<boolean>(false);
    const transitionRef = useRef<HTMLDivElement>(null)

    const {onCategoryClick} = props;

    const {sections, getSections} = categoriesStore;

    const handleMouseEnter = (showPopup: boolean, sectionId: string, sectionName: string) => {
        setPopup(showPopup);

        if (!sectionId) return;
        const activeSection = sections.find(s => s.sectionName === sectionName);
        setCategoriesToShow(activeSection?.categories ? activeSection.categories : [])
    };

    const handleMouseLeave = () => setPopup(false);

    useEffect(() => {
        const fetchSections = async () => await getSections();

        fetchSections().then(() => console.log("fetched sections..."));
    }, [getSections])

    return (
        <div key={'sections'} className={headerStyle.sections} onMouseLeave={handleMouseLeave}>
            {sections?.map((section) => {
                return <Section section={section} handleMouseEnter={handleMouseEnter} onCategoryClick={onCategoryClick}
                                transitionRef={transitionRef}
                                showPopup={showPopup} categoriesToShow={categoriesToShow}/>
            })}
        </div>
    );
});

export default Sections;
