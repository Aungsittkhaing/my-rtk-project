import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const storeApi = createApi({
    reducerPath: "storeApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000"}),
    tagTypes: ["BLog"],
    endpoints: (builder)=>({
        getStores: builder.query({
            query: ()=> "/stores",
            providesTags: ["Blog"]
        }),
        getSingleStore: builder.query({
            query: (id) => `/stores/${id}`,
            providesTags: ["Blog"]
        }),
        addStore: builder.mutation({
            query: (store)=>({
                url: "/stores",
                method: "POST",
                body: store
            }),
            invalidatesTags: ["Blog"]
        }),
        deleteStore: builder.mutation({
            query: (id)=>({
                url: `/stores/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags: ["Blog"]
        }),
        updateStore: builder.mutation({
            query: (newData)=>({
                url: `/stores/${newData.id}`,
                method: "PATCH",
                body: newData
            }),
            invalidatesTags: ["Blog"]
        })
    })
})
export const {useGetStoresQuery, useGetSingleStoreQuery, useAddStoreMutation, useDeleteStoreMutation, useUpdateStoreMutation} = storeApi;