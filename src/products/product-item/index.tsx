import React, { useState } from 'react';
import { Button, ButtonGroup, Div, Image, Text } from "@vkontakte/vkui";
import { Product } from "../type";
import styles from "./style.module.scss"
import { Icon16Clear } from "@vkontakte/icons";
import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "../../cart/cartSlice";

interface ProductItemProps {
    product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
    const [ productCount, setProductCount ] = useState(0);
    
    const useHandleAdd = () => {
        useDispatch(addToCart({ product: product, count: productCount + 1 }));
        setProductCount(productCount + 1);
    };
    
    const handleRemove = () => setProductCount(productCount - 1);
    
    const handleClear = async () => setProductCount(0);
    
    const useDispatch = useAppDispatch();
    
    
    return (
        <Div className={ styles.grid }>
            <Image size={ 128 } src={ product.image }></Image>
            <Text className={ styles.title }>{ product.title }</Text>
            <Text>Price: { product.price } $</Text>
            <ButtonGroup className={ styles.buttons }>
                <Button disabled={ productCount >= 10 } onClick={ useHandleAdd }>+</Button>
                <div>{ productCount }</div>
                <Button disabled={ productCount === 0 } onClick={ handleRemove }>-</Button>
                <Button
                    className={ styles.asyncClear }
                    onClick={ handleClear } // Передаем ID товара для очистки счетчика
                >
                    <Icon16Clear/>
                </Button>
            </ButtonGroup>
        </Div>
    );
};

export default ProductItem;