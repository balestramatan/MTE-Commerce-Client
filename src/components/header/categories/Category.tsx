import React from "react";
import headerStyle from "../Header.module.scss";
import commonStyles from "../../../styles/commonStyles.module.scss";
import CategoryModel from "../../../models/Category.model";

interface IProps {
    subCategory: CategoryModel;
    onCategoryClick: any;
}

const Category = (props: IProps) => {
    const {subCategory, onCategoryClick} = props;
    return (
        <div className={headerStyle.subCategoryContainer}>
      <span
          onClick={() => onCategoryClick(subCategory.categoryId, subCategory.categoryName)}
          className={`${headerStyle.subCategoryTitleName} ${commonStyles.animatedBottomBorder} ${commonStyles.fromRight} ${commonStyles.textAnimated}`}
      >
        {subCategory.categoryName}
      </span>
        </div>
    );
};

export default Category;
