import {fetchBaseQuery} from '@reduxjs/toolkit/query';
import { headers } from 'next/headers';
import { createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: async (headers) => {
        headers.set('Content-Type', 'application/json');
        return headers;
    },
});


export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints:  ()=> ({}),
})