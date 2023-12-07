import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AlbumPage from "../pages/AlbumPage";
import ArtistPage from "../pages/ArtistPage";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/artist/:id",
    element: <ArtistPage />,
  },
  {
    path: "/album/:id",
    element: <AlbumPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
