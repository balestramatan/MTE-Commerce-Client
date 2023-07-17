import React from "react";
import layoutStyle from "./NotFound.module.scss";
import NotFoundMessage from "../../components/notFoundMessage/NotFoundMessage";

interface Iprops {}

const NotFound = (props: Iprops) => {
  const {} = props;

  return (
    <div className={layoutStyle.notFoundContainer}>
      <NotFoundMessage />
    </div>
  );
};

export default NotFound;
