// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const Home = lazy(() => import('./HomePage'));

const HomeRoute: FuseRouteItemType = {
  path: 'home', // this means "/home"
  element: <Home />
};

export default HomeRoute;
