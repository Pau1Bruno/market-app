import { Product } from '../products';

export interface CartProduct {
    product: Product;
    count: number;
}
