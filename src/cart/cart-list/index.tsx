import React, { useEffect, useState } from 'react';
import { Div, FixedLayout, Group, Header, Panel, Text } from '@vkontakte/vkui';
import { useAppSelector } from '../../app/hooks';
import { selectCart } from '../cartSlice';
import CartItem from '../cart-item';
import styles from './styles.module.scss';

const Cart = () => {
    const cart = useAppSelector(selectCart);
    const [ summary, setSummary ] = useState<number>(0);
    
    useEffect(() => {
        let sum: number = cart.reduce(
            (prev, curr) => prev + Number(curr.product.price) * curr.count,
            0
        );
        sum = Number(sum.toFixed(2));
        setSummary(sum);
    }, [ cart ]);
    
    return (
        <FixedLayout>
            <Panel id="cart">
                <Group
                    className={ styles.scroll }
                    header={ <Header mode="secondary">Cart</Header> }
                >
                    <Div className={ styles.container }>
                        { cart &&
                            cart.map((cartProduct) => (
                                <CartItem
                                    key={ cartProduct.product.id }
                                    cartProduct={ cartProduct }
                                />
                            )) }
                    </Div>
                    <Text className={ styles.sum }>Итого: { summary } $</Text>
                </Group>
            </Panel>
        </FixedLayout>
    );
};

export default Cart;
