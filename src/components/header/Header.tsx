import React, {useRef, useState} from "react";
import {MenuItemType} from "../../interfaces/interfaces";
import {CSSTransition} from 'react-transition-group';
import PopupContent from "../elements/popup/PopupContent";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../elements/popup/popupStyle.css';
import headerStyle from './Header.module.scss';

const mockMenuItems: MenuItemType[] = [
    {
        id: "menu-item-1",
        label: "Menu Option 1",
        content: <PopupContent>{'content 1'}</PopupContent>
    },
    {
        id: "menu-item-2",
        label: "Menu Option 2",
        content: <PopupContent>{'content 2'}</PopupContent>
    },
    {
        id: "menu-item-3",
        label: "Menu Option 3",
        content: <PopupContent>{'content 3'}</PopupContent>
    },
];

const Header = () => {
    const [popUpContent, setPpoUpContent] = useState<any>(null);
    const [showPopup, setPopup] = useState<boolean>(false);
    const popupRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = (showPopup: boolean, menuId?: string) => {
        setPopup(showPopup);

        if (!menuId) return;
        const activeMenu = mockMenuItems.find(e => e.id === menuId)
        setPpoUpContent(activeMenu?.content)
    };

    const handleMouseLeave = (event: any) => {
        setPopup(showPopup);


        // check if mouse is leaving popup from bottom
        const divRect = popupRef.current!.getBoundingClientRect();
        const mouseY = event.clientY;
        if (mouseY >= divRect.bottom - 10) setPopup(false);
    };

    return (
        <div className={headerStyle.container}>
            <div className={headerStyle.logo}>
                <span>Logo</span>
            </div>
            <div className={headerStyle.menuItems}>
                {mockMenuItems.map((menuItem: MenuItemType) => (
                    <div key={menuItem.id}
                         onMouseEnter={() => handleMouseEnter(true, menuItem.id)}>
                        {menuItem.label}
                    </div>

                ))}
            </div>
            {(
                <CSSTransition
                    in={showPopup}
                    classNames="popup"
                    timeout={300}
                    unmountOnExit
                >
                    <div ref={popupRef} className={headerStyle.popup} onMouseLeave={handleMouseLeave}>
                        <p>Some more details here...</p>

                        {popUpContent}
                    </div>
                </CSSTransition>
            )}
            <div className={headerStyle.profile}>
                <span>Profile</span>
            </div>
        </div>
    );
};

export default Header;
