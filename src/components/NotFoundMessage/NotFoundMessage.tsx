import React from "react";
import layoutStyle from "./NotFoundMessage.module.scss";

interface Iprops {}

const NotFoundMessage = (props: Iprops) => {
  const {} = props;

  return (
    <div className={layoutStyle.notFoundMessageContainer}>
        <h1>אופס</h1>
        <p>שגיאה בקבלת בקשה</p>
    </div>
  );
};

export default NotFoundMessage;
