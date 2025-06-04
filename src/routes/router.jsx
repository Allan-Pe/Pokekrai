import { createBrowserRouter } from 'react-router';
import { Layout } from '@/app/layout/Layout';
import { App } from '@/app/App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
]);
