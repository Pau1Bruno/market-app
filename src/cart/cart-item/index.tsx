import React from 'react';
import { Div, Separator, Spacing, Text } from '@vkontakte/vkui';
import { CartProduct } from '../types';
import styles from './styles.module.scss';

interface CartItemProps {
    cartProduct: CartProduct;
}

const CartItem = ({ cartProduct }: CartItemProps) => {
    return (
        <Div className={styles.container}>
            <Text>{cartProduct.product.title}</Text>
            <Spacing size={16}>
                <Separator />
            </Spacing>
            <Text>count: {cartProduct.count}</Text>
        </Div>
    );
};

export default CartItem;
