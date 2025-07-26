
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const CareerPage = lazy(() => import('./components/CareerPage/page'));
const CareerRoute: FuseRouteItemType = {
  path: 'career', 
  element: <CareerPage />
};

export default CareerRoute;
