import { api } from "./index";

export const movieApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMovie: build.query({
      query: ({ type, parames }) => ({
        url: `/movie/${type}`,
        parames,
      }),
      providesTags: ["Movie"],
    }),
  }),
});

export const { useGetMovieQuery } = movieApi;
