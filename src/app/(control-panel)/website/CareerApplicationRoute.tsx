
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const CareerApplicationPage = lazy(() => import('./components/CareerApplicationPage/page'));
const CareerApplicationRoute: FuseRouteItemType = {
  path: 'careerapplication', 
  element: <CareerApplicationPage />
};

export default CareerApplicationRoute;
