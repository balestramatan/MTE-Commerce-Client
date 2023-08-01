import React from "react";
import notFoundStyle from "./NotFound.module.scss";
import NotFoundMessage from "../../components/notFoundMessage/NotFoundMessage";

interface Iprops {}

const NotFound = (props: Iprops) => {
  const {} = props;

  return (
    <div className={notFoundStyle.notFoundContainer}>
      <NotFoundMessage />
    </div>
  );
};

export default NotFound;
