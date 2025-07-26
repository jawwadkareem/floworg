
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const DeveloperPage = lazy(() => import('./components/DevelopersPage/page'));
const DeveloperRoute: FuseRouteItemType = {
  path: 'developer', 
  element: <DeveloperPage />
};

export default DeveloperRoute;
