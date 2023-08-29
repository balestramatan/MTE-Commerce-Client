import React from "react";
import headerStyle from "../Header.module.scss";
import { CSSTransition } from "react-transition-group";
import CategoryModel from "../../../models/Category.model";
import SectionModel from "../../../models/Section.model";
import Categories from "../categories/Categories";

interface IProps {
  section: SectionModel;
  handleMouseEnter: any;
  transitionRef: any;
  onCategoryClick: any;
  showPopup: boolean;
  categoriesToShow: CategoryModel[];
}

const Section = (props: IProps) => {
  const {
    section,
    handleMouseEnter,
    transitionRef,
    showPopup,
    categoriesToShow,
    onCategoryClick,
  } = props;

  return (
    <div key={`${section.sectionId}_list`}>
      <div
        key={section.sectionId}
        className={headerStyle.section}
        onMouseEnter={() =>
          handleMouseEnter(true, section.sectionId, section.sectionName)
        }
      >
        <span
          className={`${headerStyle.sectionNameTitle} ${headerStyle.animatedBottomBorder} ${headerStyle.fromRight}`}
          onClick={() => {
            onCategoryClick(section.sectionId, section.sectionName);
          }}
        >
          {section.sectionName}
        </span>
      </div>
      <CSSTransition
        key={`${section.sectionId}_tran`}
        nodeRef={transitionRef}
        in={showPopup}
        classNames={"popup"}
        timeout={300}
        unmountOnExit
      >
        <Categories
          key={`${section.sectionId}_tran`}
          section={section}
          transitionRef={transitionRef}
          categories={categoriesToShow}
          onCategoryClick={onCategoryClick}
        />
      </CSSTransition>
    </div>
  );
};

export default Section;
