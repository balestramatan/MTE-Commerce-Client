import React, { useState } from 'react';
import sideMenuStyle from './SideMenu.module.scss';
import { observer } from 'mobx-react';
import MenuIcon from '@mui/icons-material/Menu';
import rootStores from '../../../stores';
import { SECTIONS_STORE } from '../../../stores/consts';
import SectionsStore from '../../../stores/Sections.store';
import { Drawer } from 'antd';
import SectionCollapse from './sectionCollapse/SectionCollapse';

const categoriesStore = rootStores[SECTIONS_STORE] as SectionsStore;

const SideMenu = observer(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { sections } = categoriesStore;

  const onMenuClickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <MenuIcon onClick={onMenuClickHandler} />
      <Drawer placement='right' onClose={onMenuClickHandler} open={isMenuOpen}>
        {sections?.map((section) => (
          <SectionCollapse key={section.sectionId} section={section} onCloseMenu={onMenuClickHandler} />
        ))}
      </Drawer>
    </div>
  );
});

export default SideMenu;
