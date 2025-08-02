
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const DashboardPage = lazy(() => import('./components/DashboardPage/page'));
const DashboardRoute: FuseRouteItemType = {
  path: 'dashboard', 
  element: <DashboardPage />
};

export default DashboardRoute;
