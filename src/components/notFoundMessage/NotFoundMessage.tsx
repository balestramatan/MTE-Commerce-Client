import React from "react";
import notFoundMessageStyle from "./NotFoundMessage.module.scss";

interface IProps {
}

const NotFoundMessage = (props: IProps) => {
    return (
        <div className={notFoundMessageStyle.notFoundMessageContainer}>
            <h1>אופס</h1>
            <p>שגיאה בקבלת בקשה</p>
        </div>
    );
};

export default NotFoundMessage;
