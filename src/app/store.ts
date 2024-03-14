import {
    Action,
    combineSlices,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit';
import { productsApiSlice } from '../products/productsApiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { cartSlice } from '../cart/cartSlice';

export const rootReducer = combineSlices(productsApiSlice, cartSlice);
export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = (preloadedState?: Partial<RootState>) => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(productsApiSlice.middleware);
        },
        preloadedState,
    });

    setupListeners(store.dispatch);
    return store;
};

export const store = makeStore();

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    RootState,
    unknown,
    Action
>;
