
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const ConsultingPage = lazy(() => import('./components/ConsultingPage/page'));
const ConsultingRoute: FuseRouteItemType = {
  path: 'consulting', 
  element: <ConsultingPage />
};

export default ConsultingRoute;
