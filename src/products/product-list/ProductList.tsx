import React from 'react';
import { useGetProductsQuery } from '../productsApiSlice';
import { Div, Group, Header, Panel } from '@vkontakte/vkui';
import { ProductItem } from '../index';
import styles from './ProductList.module.scss';

export const ProductList = () => {
    const { data: products } = useGetProductsQuery(100);

    return (
        <Panel id="products">
            <Group header={<Header mode="secondary">Products</Header>}>
                <Div className={styles.grid}>
                    {products &&
                        products.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                </Div>
            </Group>
        </Panel>
    );
};
