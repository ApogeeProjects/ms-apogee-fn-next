// apiSlice.js
import { createApi, fetchBaseQuery } from "@rtk-incubator/rtk-query";

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  endpoints: (builder) => ({
    // Define your API endpoints here

    signUp: builder.mutation({
      query: (credentials) => ({
        url: "/auth/signup",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useSignUpMutation } = api;
export default api;
