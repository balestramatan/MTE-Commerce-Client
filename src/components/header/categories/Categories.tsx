import React from 'react';
import headerStyle from "../Header.module.scss";
import Category from "./Category";
import SectionModel from "../../../models/Section";
import CategoryModel from "../../../models/Category.model";

interface IProps {
    section: SectionModel;
    transitionRef: any;
    onCategoryClick: (c: CategoryModel) => void;
    categories: CategoryModel[];
}

const Categories = (props: IProps) => {
    const {section, transitionRef, categories, onCategoryClick} = props;
    return (
        <div
            key={`${section.sectionId}_categories`}
            ref={transitionRef}
            className={headerStyle.popupContainer}>

            {categories.map(category => {
                return (
                    <div key={category.categoryId} className={headerStyle.categoryContainer}>
                                            <span
                                                className={`${headerStyle.categoryTitleName} ${headerStyle.textAnimated}`}>{category.categoryName}
                                            </span>

                        {category.subCategories?.map(subCategory => {
                            return <Category subCategory={subCategory} onCategoryClick={onCategoryClick}/>
                        })}
                    </div>
                )
            })}

        </div>
    );
};

export default Categories;
