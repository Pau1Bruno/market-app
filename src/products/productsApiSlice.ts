import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from './types';

export const productsApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }),
    reducerPath: 'productsApi',
    tagTypes: ['Products'],
    endpoints: (build) => ({
        getProducts: build.query<Product[], number>({
            query: (limit = 10) => `?limit=${limit}`,
            providesTags: (result, error, id) => [{ type: 'Products', id }],
        }),
    }),
});

export const { useGetProductsQuery } = productsApiSlice;
