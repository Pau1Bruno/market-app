import React, { useState } from 'react';
import { Button, ButtonGroup, Div, Image, Text } from '@vkontakte/vkui';
import { Product } from '../types';
import styles from './style.module.scss';
import { Icon16Clear } from '@vkontakte/icons';
import { useAppDispatch } from '../../app/hooks';
import { addOneToCart, deleteFromCart, removeOneFromCart } from '../../cart';

interface ProductItemProps {
    product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
    const [ productCount, setProductCount ] = useState(0);
    
    const useHandleAdd = () => {
        useDispatch(
            addOneToCart({ product: product, count: productCount + 1 })
        );
        setProductCount(productCount + 1);
    };
    
    const useHandleRemove = () => {
        useDispatch(
            removeOneFromCart({ product: product, count: productCount - 1 })
        );
        setProductCount(productCount - 1);
    };
    
    const useHandleClear = async () => {
        useDispatch(deleteFromCart(product.id));
        setProductCount(0);
    };
    
    const useDispatch = useAppDispatch();
    
    return (
        <Div className={ styles.grid }>
            <Image size={ 128 } src={ product.image }></Image>
            <p className={ styles.title }>{ product.title }</p>
            <Div className={ styles.cart }>
                <Text className={ styles.price }>Цена: { product.price } руб.</Text>
                <ButtonGroup className={ styles.buttons }>
                    <Button
                        disabled={ productCount === 0 }
                        onClick={ useHandleRemove }
                    >
                        -
                    </Button>
                    <Text className={ styles.count }>{ productCount }</Text>
                    <Button
                        disabled={ productCount >= 10 }
                        onClick={ useHandleAdd }
                    >
                        +
                    </Button>
                    <Button
                        disabled={ productCount === 0 }
                        onClick={ useHandleClear }
                    >
                        <Icon16Clear/>
                    </Button>
                </ButtonGroup>
            </Div>
        </Div>
    );
};
