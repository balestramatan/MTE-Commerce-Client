import React from "react";
import sliderShowStyle from "./SliderShow.module.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface Iprops {
  images: string[]
}

const SliderShow = (props: Iprops) => {
  const {images} = props;

  return (
    <Slide>
      {images.map((image,i) => {
        return (
          <div key={i} className={sliderShowStyle.eachSlideEffect}>
            <div style={{ backgroundImage: `url(${image})`}}></div>
          </div>
        );
      })}
    </Slide>
  );
};

export default SliderShow;
