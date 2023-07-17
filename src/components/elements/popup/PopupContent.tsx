import React from 'react';

export interface IProps {
    children: any;
}

const PopupContent = (props: IProps) => {
    const {children} = props;
    return (
        children
    );
};

export default PopupContent;
