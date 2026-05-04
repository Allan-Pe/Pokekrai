import { createBrowserRouter } from 'react-router';
import { Layout } from '@/app/layout/Layout';
import { Home } from '@/app/pages/Home';
import { Detail } from '@/app/pages/Detail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'detail/:id',
        element: <Detail />,
      },
    ],
  },
]);
