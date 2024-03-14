import React from 'react';
import { Div } from "@vkontakte/vkui";
import { CartProduct } from "../types";
import styles from "./styles.module.scss";

interface CartItemProps {
    cartProduct: CartProduct
}

const CartItem = ({ cartProduct }: CartItemProps) => {
    return (
        <Div className={ styles.container }>
            { cartProduct.product.title }
            { cartProduct.count }
        </Div>
    );
};

export default CartItem;