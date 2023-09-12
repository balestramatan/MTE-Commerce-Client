import React, { useState } from 'react';
import sectionCollapseStyle from './SectionCollapse.module.scss';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import CategoryCollapse from '../categoryCollapse/CategoryCollapse';

interface IProps {
  section: any;
  onCloseMenu: any;
}

const SectionCollapse = (props: IProps) => {
  const { onCloseMenu, section } = props;
  const [isSectionCollapseOpen, setIsSectionCollapseOpen] = useState(false);

  const onSectionCollapseClickHandler = () => {
    setIsSectionCollapseOpen(!isSectionCollapseOpen);
  };

  return (
    <>
      <ListItemButton className={sectionCollapseStyle.sectionCollapseContainer} onClick={onSectionCollapseClickHandler}>
        <ListItemText className={sectionCollapseStyle.sectionCollapseText} primary={section.sectionName} />
        {isSectionCollapseOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isSectionCollapseOpen} timeout='auto' unmountOnExit>
        {section.categories.map((category) => (
          <CategoryCollapse onCloseMenu={onCloseMenu} key={category.categoryId} category={category} />
        ))}
      </Collapse>
    </>
  );
};

export default SectionCollapse;
