import React from "react";
import layoutStyle from "./Home.module.scss";

interface Iprops {}

const Home = (props: Iprops) => {
  const {} = props;

  return (
    <div className={layoutStyle.homeContainer}>
      <div>
        <h1>עמוד הבית</h1>
      </div>
    </div>
  );
};

export default Home;
