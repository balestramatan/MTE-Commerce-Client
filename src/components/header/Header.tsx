import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import '../elements/popup/popupStyle.css';
import './Header.css';
import headerStyle from './Header.module.scss';
import HeaderActions from './headerActions/HeaderActions';
import Sections from './sections/Sections';
import { animated, useTransition } from '@react-spring/web';
import { useNavigate } from 'react-router-dom';
import Title from './title/Title';
import SearchIcon from '../search/SearchIcon';
import { useMediaQuery } from 'react-responsive';
import rootStores from '../../stores';
import { SECTIONS_STORE } from '../../stores/consts';
import SectionsStore from '../../stores/Sections.store';
import SideMenu from './sideMenu/SideMenu';

const textOptions = ['משלוחים חינם בקנייה מעל 299 ש״ח', 'כל המוצרים בהנחות משוגעות', 'בעל הבית השתגע!'];
const categoriesStore = rootStores[SECTIONS_STORE] as SectionsStore;

const Header = observer(() => {
  const [index, setIndex] = useState(0);
  const { getSections } = categoriesStore;
  const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobileScreen = useMediaQuery({ query: '(max-width: 768px)' });

  const navigate = useNavigate();
  const onTitleClickHandler = () => navigate('/');

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchSections = async () => await getSections();
    fetchSections().then(() => console.log('fetched sections...'));
  }, []);

  const transitions = useTransition(textOptions[index], {
    from: { opacity: 0, transform: 'translateX(400%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
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
          {isMobileScreen && <SideMenu />}
          <SearchIcon />
          <Title onClick={onTitleClickHandler} title={'SmokeTalk'} />
          <HeaderActions />
        </div>
        {isBigScreen && <Sections />}
      </div>
    </>
  );
});

export default Header;
