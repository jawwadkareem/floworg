// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const TendersPage = lazy(() => import('./components/TendersPage/page'));
const TendersRoute: FuseRouteItemType = {
  path: 'tender', 
  element: <TendersPage />
};

export default TendersRoute;
