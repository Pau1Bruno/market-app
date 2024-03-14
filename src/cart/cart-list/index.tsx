import React, { useEffect, useState } from 'react';
import { FixedLayout, Group, Header, Panel, Text } from "@vkontakte/vkui";
import { useAppSelector } from "../../app/hooks";
import { selectCart } from "../cartSlice";
import CartItem from "../cart-item";

const Cart = () => {
    const cart = useAppSelector(selectCart);
    const [ summary, setSummary ] = useState<number>(0);
    
    useEffect(() => {
        let sum: number = cart.reduce((prev, curr) => prev + Number(curr.product.price) * curr.count, 0);
        sum = Number(sum.toFixed(2));
        setSummary(sum);
    }, [ cart ])
    
    
    return (
        <FixedLayout>
            <Panel id="cart">
                <Group header={ <Header mode="secondary">Cart</Header> }>
                    { cart && cart.map(cartProduct =>
                        <CartItem key={ cartProduct.product.id } cartProduct={ cartProduct }/>
                    ) }
                </Group>
                <Text>Итого: { summary } $</Text>
            </Panel>
        </FixedLayout>
    );
};

export default Cart;