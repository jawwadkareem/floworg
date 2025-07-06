import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const Service1Page = lazy(() => import('./Service1Page'));
const Service1Route: FuseRouteItemType = {
  path: 'service1', 
  element: <Service1Page />
};

export default Service1Route;
