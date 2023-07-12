import React from 'react';

import layoutStyle from '../../styles/Layout.module.scss';

const Layout = ({children}: any) => {
    return (
        <div id={"app"} className={layoutStyle.mainContainer}>
            {children}
        </div>
    );
};

export default Layout;
