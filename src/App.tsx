import * as React from 'react';
import { AppRoot, SplitCol, SplitLayout } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import ProductList from './products/product-list';
import Cart from './cart/cart-list';
import './global.scss';

const App = () => {
    return (
        <AppRoot>
            <SplitLayout>
                <SplitCol width="75%" autoSpaced>
                    <ProductList />
                </SplitCol>

                <SplitCol width="25%" autoSpaced>
                    <Cart />
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    );
};

export default App;
