import React from "react";
import linkButtonStyle from "./LinkButton.module.scss";

interface Iprops {
  title: string;
  size: string;
  onClick: any;
  disabled: boolean;
}

const LinkButton = (props: Iprops) => {
  const { title, size, onClick, disabled } = props;

  return (
    <p
      onClick={disabled ? () => {} : onClick}
      style={{ fontSize: size }}
      className={linkButtonStyle.linkButtonContainer}
    >
      {title}
    </p>
  );
};

export default LinkButton;
