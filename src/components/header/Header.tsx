import React, {useEffect, useState} from "react";
import {observer} from "mobx-react";
import '../elements/popup/popupStyle.css';
import './Header.css';
import headerStyle from './Header.module.scss';
import HeaderActions from "./headerActions/HeaderActions";
import Sections from "./sections/Sections";
import {animated, useTransition} from '@react-spring/web'
import Title from "./title/Title";
import SearchIcon from "../search/SearchIcon";

const textOptions = ['משלוחים חינם בקנייה מעל 299 ש״ח', 'כל המוצרים בהנחות משוגעות', 'בעל הבית השתגע!'];

const Header = observer(() => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % textOptions.length);
        }, 5000); // Adjust the interval between text changes

        return () => clearInterval(interval);
    }, []);

    const transitions = useTransition(textOptions[index], {
        from: {opacity: 0, transform: 'translateX(400%)'},
        enter: {opacity: 1, transform: 'translateX(0%)'},
    });

    return (
        <>
            <header className="header">
                <div className="header-text-container">
                    {transitions((style, text) => (
                        <animated.p style={style} className="animated-text">
                            {text}
                        </animated.p>
                    ))}
                </div>
            </header>
            <div key={'header'} className={headerStyle.container}>
                <div className={headerStyle.actionsCon}>
                    <HeaderActions/>
                    <Title className={headerStyle.titleContainer} title={'SmokeTalk'}/>
                    <SearchIcon/>
                </div>
                <Sections/>
            </div>
        </>
    );
});

export default Header;
