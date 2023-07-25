import React from 'react';
import layoutStyle from './Layout.module.scss';

interface IProps {
    children: any;
}

const Layout = (props: IProps) => {
    const {children} = props;

    return (
        <div className={`${layoutStyle.layoutContainer}`}>
            {children}
        </div>
    );
};

export default Layout;
