import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  NewsLetter,
  SinglePageError,
} from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Loader as landingLoader } from "./pages/Landing";
import { Loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsLetterAction } from "./pages/NewsLetter";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
      },
      {
        path: "cocktail/:id",
        errorElement: <SinglePageError />,
        element: <Cocktail />,
        loader: singleCocktailLoader(queryClient),
      },
      {
        path: "newsletter",
        element: <NewsLetter />,
        action: newsLetterAction,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
