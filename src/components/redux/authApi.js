import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://goit-task-manager.herokuapp.com/users',
    prepareHeaders: (headers, { getState }) => {
      console.log(getState());
      const token = getState().auth.token;
      if (token) {
        console.log(token);
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    signupUser: builder.mutation({
      query: newUser => ({
        url: `/signup`,
        method: 'POST',
        body: newUser,
      }),
      provides: result => console.log(result),
      invalidatesTags: ['Auth'],
    }),
    loginUser: builder.mutation({
      query: newUser => ({
        url: `/login`,
        method: 'POST',
        body: newUser,
      }),
      provides: result => console.log(result),
      invalidatesTags: ['Auth'],
    }),
    logoutUser: builder.mutation({
      query: '/logout',
    }),
    currentUser: builder.query({
      query: '/current',
    }),
  }),
});

export const { useSignupUserMutation, useLoginUserMutation } = authApi;
