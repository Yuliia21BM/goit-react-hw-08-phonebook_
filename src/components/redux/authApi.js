import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    signupUser: builder.mutation({
      query: newUser => ({
        url: `/users/login`,
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['Auth'],
    }),
    loginUser: builder.query({
      query: () => `/signup`,
      providesTags: ['Auth'],
    }),
  }),
});

export const { useSignupUserMutation } = authApi;
