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
                    <img key={`${image}_${i}`} src={image} className={sliderShowStyle.image} alt={image}/>
                );
            })}
        </Slide>
    );
};

export default SliderShow;
