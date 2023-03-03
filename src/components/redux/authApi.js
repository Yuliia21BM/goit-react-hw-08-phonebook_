import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { useSelector } from 'react-redux';
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://goit-task-manager.herokuapp.com/users',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      console.log(token);

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
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
      invalidatesTags: ['Auth'],
    }),
    loginUser: builder.mutation({
      query: newUser => ({
        url: `/login`,
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['Auth'],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: `/logout`,
        method: 'POST',
      }),
    }),
    currentUser: builder.query({
      query: '/current',
    }),
  }),
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useCurrentUserQuery,
} = authApi;

// export const refreshUser = ()=>{
//     const persistedToken = useSelector(state => state.auth.token);

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     try {
//       // If there is a token, add it to the HTTP header and perform the request
//       setAuthHeader(persistedToken);
//       useCurrentUserQuery()
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
