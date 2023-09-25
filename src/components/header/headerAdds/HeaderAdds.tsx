import React, {useEffect, useState} from 'react';
import {animated, useTransition} from "@react-spring/web";
import rootStores from "../../../stores";
import {STORE_INFORMATION_STORE} from "../../../stores/consts";
import StoreInformationStore from "../../../stores/StoreInformation.store";
import {observer} from 'mobx-react';

const storeInformationStore = rootStores[STORE_INFORMATION_STORE] as StoreInformationStore;
const HeaderAdds = observer(() => {
    const [index, setIndex] = useState(0);

    const {headerAddsTexts} = storeInformationStore;

    const transitions = useTransition(headerAddsTexts[index], {
        from: {opacity: 0, transform: 'translateX(400%)'},
        enter: {opacity: 1, transform: 'translateX(0%)'},
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % headerAddsTexts.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [headerAddsTexts]);

    return (
        <header className='header'>
            <div className='header-text-container'>
                {transitions((style, text) => (
                    <animated.p style={style} className='animated-text'>
                        {text}
                    </animated.p>
                ))}
            </div>
        </header>
    );
});

export default HeaderAdds;
