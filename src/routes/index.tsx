import { createBrowserRouter, RouterProvider } from 'react-router';
import { requiresAuth } from '@/routes/loaders';
import DefaultLayout from '@/routes/layouts/Default';
import EmptyLayout from '@/routes/layouts/Empty';
import NotFound from '@/routes/pages/NotFound';
import Home from '@/routes/pages/Home';
import About from '@/routes/pages/About';
import Movies from '@/routes/pages/Movies';
import MovieDetails from '@/routes/pages/MovieDetails';
import SignIn from '@/routes/pages/SingIn';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      {
        path: '/movies',
        element: <Movies />,
        loader: requiresAuth,
        children: [
          {
            path: '/movies/:movieId',
            element: <MovieDetails />
          }
        ]
      },
      {
        path: '/signin',
        element: <SignIn />
      }
    ]
  },
  {
    element: <EmptyLayout />,
    children: [
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
