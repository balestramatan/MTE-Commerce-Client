import React, {useEffect, useRef, useState} from "react";
import {observer} from "mobx-react";
import {CSSTransition} from 'react-transition-group';
import '../elements/popup/popupStyle.css';
import headerStyle from './Header.module.scss';

import rootStores from "../../stores";
import {TOPICS_STORE} from '../../stores/consts'
import SectionsStore from "../../stores/Sections.store";
import Category from "../../models/Category.model";

const categoriesStore = rootStores[TOPICS_STORE] as SectionsStore;

const Header = observer(() => {
    const [categoriesToShow, setCategoriesToShow] = useState<Category[]>([]);
    const [showPopup, setPopup] = useState<boolean>(false);
    const transitionRef = useRef<HTMLDivElement>(null)

    const {sections, getSections} = categoriesStore;

    const handleMouseEnter = (showPopup: boolean, menuId?: string) => {
        setPopup(showPopup);

        if (!menuId) return;
        const activeMenu = sections.find(s => s.categories!.find(c => c.categoryId === menuId))

        console.log('activeMenu ::')
        console.log(activeMenu)
        setCategoriesToShow(activeMenu?.categories ? activeMenu.categories : [])
    };

    const handleMouseLeave = (event: any) => {
        setPopup(showPopup);

        // check if mouse is leaving popup from bottom
        const divRect = transitionRef.current!.getBoundingClientRect();
        const mouseY = event.clientY;
        if (mouseY >= divRect.bottom - 10) setPopup(false);
    };

    useEffect(() => {
        const fetchSections = async () => await getSections();

        fetchSections().then(() => console.log("fetched sections..."));
    }, [getSections])

    return (
        <div key={'header'} className={headerStyle.container}>
            <div className={headerStyle.logo}>
                <span>לוגו</span>
            </div>
            <div className={headerStyle.topics}>
                {sections?.map((section) => {
                    return (
                        <div key={`${section.sectionId}_list`}>
                            <div key={section.sectionId} className={headerStyle.topic}
                                 onMouseEnter={() => handleMouseEnter(true, section.sectionId)}>
                                <span
                                    className={`${headerStyle.sectionName} ${headerStyle.fromRight}`}>{section.sectionName}</span>
                            </div>
                            <CSSTransition
                                key={`${section.sectionId}_tran`}
                                nodeRef={transitionRef}
                                in={showPopup}
                                classNames="popup"
                                timeout={500}
                                unmountOnExit
                            >
                                <div key={`${section.sectionId}_categories`} ref={transitionRef}
                                     className={headerStyle.popupContainer}
                                     onMouseLeave={handleMouseLeave}>
                                    {categoriesToShow.map(category => {
                                        console.log(category)

                                        return (
                                            <div>
                                                {category.categoryName}
                                            </div>
                                        )
                                    })}
                                </div>
                            </CSSTransition>
                        </div>
                    )
                })}
            </div>
            <div className={headerStyle.profile}>
                <span>פרופיל</span>
            </div>
        </div>
    );
});

export default Header;
