import { Product } from '../products/type';

export interface CartProduct {
    product: Product;
    count: number;
}
