import React from "react";
import linkButton from "./LinkButton.module.scss";

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
      className={linkButton.linkButtonContainer}
    >
      {title}
    </p>
  );
};

export default LinkButton;
