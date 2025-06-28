// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const Services = lazy(() => import('./Services'));

const ServicesRoute: FuseRouteItemType = {
  path: 'services', // this means "/home"
  element: <Services />
};

export default ServicesRoute;
