import React from "react";
import sliderShowStyle from "./SliderShow.module.scss";
import {Slide} from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface IProps {
    images: string[]
}

const SliderShow = (props: IProps) => {
    const {images} = props;

    return (
        <Slide>
            {images.map((image, i) => {
                return (
                        <img src={image} className={sliderShowStyle.image}/>
                );
            })}
        </Slide>
    );
};

export default SliderShow;
