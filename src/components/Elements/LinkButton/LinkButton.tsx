import React from "react";
import layoutStyle from "./LinkButton.module.scss";

interface Iprops {
  title: string;
  size: string;
  onClick: any;
}

const LinkButton = (props: Iprops) => {
  const { title, size, onClick } = props;

  return (
    <p
      onClick={onClick}
      style={{ fontSize: size }}
      className={layoutStyle.linkButtonContainer}
    >
      {title}
    </p>
  );
};

export default LinkButton;
