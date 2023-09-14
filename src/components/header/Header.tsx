import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import '../elements/popup/popupStyle.css';
import './Header.css';
import headerStyle from './Header.module.scss';
import HeaderActions from './headerActions/HeaderActions';
import Sections from './sections/Sections';
import {animated, useTransition} from '@react-spring/web';
import {useNavigate} from 'react-router-dom';
import Title from './title/Title';
import SearchIcon from '../search/SearchIcon';
import {useMediaQuery} from 'react-responsive';
import rootStores from '../../stores';
import {SECTIONS_STORE, STORE_INFORMATION_STORE} from '../../stores/consts';
import SectionsStore from '../../stores/Sections.store';
import StoreInformationStore from '../../stores/StoreInformation.store';
import SideMenu from './sideMenu/SideMenu';

const categoriesStore = rootStores[SECTIONS_STORE] as SectionsStore;
const storeInformationStore = rootStores[STORE_INFORMATION_STORE] as StoreInformationStore;

const Header = observer(() => {
    const [index, setIndex] = useState(0);
    const {getSections} = categoriesStore;
    const {headerAddsTexts} = storeInformationStore;
    const isBigScreen = useMediaQuery({query: '(min-width: 768px)'});
    const isMobileScreen = useMediaQuery({query: '(max-width: 768px)'});

    const navigate = useNavigate();
    const onTitleClickHandler = () => navigate('/');

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % headerAddsTexts.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [headerAddsTexts.length]);

    useEffect(() => {
        const fetchSections = async () => await getSections();
        fetchSections().then(() => console.log('fetched sections...'));
    }, [getSections]);

    const transitions = useTransition(headerAddsTexts[index], {
        from: {opacity: 0, transform: 'translateX(400%)'},
        enter: {opacity: 1, transform: 'translateX(0%)'},
    });

    return (
        <>
            <header className='header'>
                <div className='header-text-container'>
                    {transitions((style, text) => (
                        <animated.p style={style} className='animated-text'>
                            {text}
                        </animated.p>
                    ))}
                </div>
            </header>
            <div key={'header'} className={headerStyle.container}>
                <div className={headerStyle.actionsCon}>
                    {isMobileScreen && <SideMenu/>}
                    <SearchIcon/>
                    <Title onClick={onTitleClickHandler} title={'SmokeTalk'}/>
                    <HeaderActions/>
                </div>
                {isBigScreen && <Sections/>}
            </div>
        </>
    );
});

export default Header;
