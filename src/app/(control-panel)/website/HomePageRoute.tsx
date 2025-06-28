// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const HomePage = lazy(() => import('./HomePage'));
const HomePageRoute: FuseRouteItemType = {
  path: 'home', 
  element: <HomePage />
};

export default HomePageRoute;
