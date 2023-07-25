import React, {useEffect, useRef, useState} from 'react';
import headerStyle from "../Header.module.scss";
import {CSSTransition} from "react-transition-group";
import Category from "../../../models/Category.model";

import rootStores from "../../../stores";
import {SECTIONS_STORE} from '../../../stores/consts'
import SectionsStore from "../../../stores/Sections.store";
import {observer} from "mobx-react";

const categoriesStore = rootStores[SECTIONS_STORE] as SectionsStore;

const Sections = observer(() => {
    const [categoriesToShow, setCategoriesToShow] = useState<Category[]>([]);
    const [showPopup, setPopup] = useState<boolean>(false);
    const transitionRef = useRef<HTMLDivElement>(null)

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
        <div className={headerStyle.sections} onMouseLeave={handleMouseLeave}>
            {sections?.map((section) => {
                return (
                    <div key={`${section.sectionId}_list`}>
                        <div key={section.sectionId} className={headerStyle.section}
                             onMouseEnter={() => handleMouseEnter(true, section.sectionId, section.sectionName)}>
                                <span
                                    className={`${headerStyle.sectionNameTitle} ${headerStyle.animatedBottomBorder} ${headerStyle.fromRight}`}>{section.sectionName}</span>
                        </div>
                        <CSSTransition
                            key={`${section.sectionId}_tran`}
                            nodeRef={transitionRef}
                            in={showPopup}
                            classNames={"popup"}
                            timeout={300}
                            unmountOnExit
                        >
                            <div
                                key={`${section.sectionId}_categories`}
                                ref={transitionRef}
                                className={headerStyle.popupContainer}>

                                {categoriesToShow.map(category => {
                                    return (
                                        <div key={category.categoryId} className={headerStyle.categoryContainer}>
                                            <span
                                                className={`${headerStyle.categoryTitleName} ${headerStyle.textAnimated}`}>{category.categoryName}
                                            </span>

                                            {category.subCategories?.map(subCategory => {
                                                return (
                                                    <div key={subCategory.categoryId}>
                                                            <span
                                                                className={`${headerStyle.subCategoryTitleName} ${headerStyle.animatedBottomBorder} ${headerStyle.fromRight} ${headerStyle.textAnimated}`}>
                                                                {subCategory.categoryName}
                                                            </span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })}

                            </div>
                        </CSSTransition>
                    </div>
                )
            })}
        </div>
    );
});

export default Sections;
