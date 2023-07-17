import React from 'react';

interface IProps {
    children: any;
}

const Layout = (props: IProps) => {
    const {children} = props;

    return (
        <div id={"app"}>
            {children}
        </div>
    );
};

export default Layout;
