import React from 'react';
import titleStyle from './Title.module.scss';

interface IProps {
    title: string,
    onClick: () => void
}
const Title = (props: IProps) => {
    const {title, onClick} = props

    return (
        <span onClick={onClick} className={titleStyle.titleContainer}>{title}</span>
    );
};

export default Title;
