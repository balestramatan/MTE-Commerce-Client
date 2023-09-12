import React, { useState } from 'react';
import categoryCollapseStyle from './CategoryCollapse.module.scss';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import UnfoldLessOutlinedIcon from '@mui/icons-material/UnfoldLessOutlined';
import Collapse from '@mui/material/Collapse';
import rootStores from '../../../../stores';
import { observer } from 'mobx-react';
import { SECTIONS_STORE } from '../../../../stores/consts';
import SectionsStore from '../../../../stores/Sections.store';
import { useNavigate } from 'react-router-dom';

const sectionsStore = rootStores[SECTIONS_STORE] as SectionsStore;

interface IProps {
  category: any;
  onCloseMenu: any;
}

const CategoryCollapse = observer((props: IProps) => {
  const { onCloseMenu, category } = props;
  const [isCategoryCollapseOpen, setIsCategoryCollapseOpen] = useState(false);
  const { setSelectedSection } = sectionsStore;
  const navigate = useNavigate();

  const onCategoryCollapseClickHandler = () => {
    setIsCategoryCollapseOpen(!isCategoryCollapseOpen);
  };

  const onSubCategoryClick = (categoryId: string, categoryName: string) => {
    setSelectedSection({
      sectionId: categoryId,
      sectionName: categoryName,
    });
    onCloseMenu();
    navigate(`products-page/${categoryName}`);
  };

  return (
    <>
      <ListItemButton className={categoryCollapseStyle.categoryCollapseContainer} onClick={onCategoryCollapseClickHandler}>
        <ListItemText className={categoryCollapseStyle.categoryCollapseText} primary={category.categoryName} />
        {isCategoryCollapseOpen ? <UnfoldLessOutlinedIcon /> : <UnfoldMoreOutlinedIcon />}
      </ListItemButton>
      <Collapse className={categoryCollapseStyle.subCategoryCollapseContainer} in={isCategoryCollapseOpen} timeout='auto' unmountOnExit>
        {category.subCategories.map((subCategory) => (
          <div
            onClick={() => {
              onSubCategoryClick(subCategory.categoryId, subCategory.categoryName);
            }}
            key={subCategory.categoryId}
          >
            <ListItemButton style={{ textAlign: 'right' }}>
              <ListItemText className={categoryCollapseStyle.subCategoryCollapseText} primary={subCategory.categoryName} />
            </ListItemButton>
          </div>
        ))}
      </Collapse>
    </>
  );
});

export default CategoryCollapse;
