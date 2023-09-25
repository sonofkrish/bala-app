import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import MainLayout from '../../layouts/main/layout';

import SplashScreen from '../../components/loading-screen/splash-screen';

export const HomePage = lazy(() => import('../../pages/Home'));
const Page404 = lazy(() => import('../../pages/NotFound'));

export const mainRoutes = [
  {
    element: (
      <MainLayout>
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    children: [{ path: '404', element: <Page404 /> }],
  },
];
