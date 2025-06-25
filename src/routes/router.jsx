import { createBrowserRouter } from 'react-router';
import { Layout } from '@/app/layout/Layout';
import { Home } from '@/app/pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
