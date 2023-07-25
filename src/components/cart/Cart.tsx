import React from 'react';
import {Drawer} from "antd";

interface IProps {
    isCartOpen: boolean;
    onClose: any;
}

const Cart = (props: IProps) => {
    const {isCartOpen, onClose} = props;
    return (
        <Drawer title="עגלת קניות" placement="right" onClose={onClose} open={isCartOpen}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    );
};

export default Cart;
