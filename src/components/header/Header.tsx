import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import '../elements/popup/popupStyle.css';
import './Header.css';
import headerStyle from './Header.module.scss';
import HeaderActions from './headerActions/HeaderActions';
import Sections from './sections/Sections';
import {useNavigate} from 'react-router-dom';
import Title from './title/Title';
import SearchIcon from '../search/SearchIcon';
import {useMediaQuery} from 'react-responsive';
import rootStores from '../../stores';
import {SECTIONS_STORE} from '../../stores/consts';
import SectionsStore from '../../stores/Sections.store';
import SideMenu from './sideMenu/SideMenu';
import HeaderAdds from "./headerAdds/HeaderAdds";

const categoriesStore = rootStores[SECTIONS_STORE] as SectionsStore;


const Header = observer(() => {
    const {getSections} = categoriesStore;

    const isBigScreen = useMediaQuery({query: '(min-width: 768px)'});
    const isMobileScreen = useMediaQuery({query: '(max-width: 768px)'});

    const navigate = useNavigate();
    const onTitleClickHandler = () => navigate('/');

    useEffect(() => {
        const fetchSections = async () => await getSections();
        fetchSections().then(() => console.log('fetched sections...'));
    }, [getSections]);

    return (
        <>
            <HeaderAdds/>
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
