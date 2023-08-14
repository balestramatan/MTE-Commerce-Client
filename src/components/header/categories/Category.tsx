import React from "react";
import headerStyle from "../Header.module.scss";
import SubCategory from "../../../models/SubCategory.model";
import CategoryModel from "../../../models/Category.model";

interface IProps {
  subCategory: SubCategory;
  onCategoryClick: any;
}

const Category = (props: IProps) => {
  const { subCategory, onCategoryClick } = props;
  return (
    <div className={headerStyle.subCategoryContainer}>
      <span
        onClick={() =>
          onCategoryClick(subCategory.categoryId, subCategory.categoryName)
        }
        className={`${headerStyle.subCategoryTitleName} ${headerStyle.animatedBottomBorder} ${headerStyle.fromRight} ${headerStyle.textAnimated}`}
      >
        {subCategory.categoryName}
      </span>
    </div>
  );
};

export default Category;
