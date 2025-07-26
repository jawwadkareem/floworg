
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const AffiliatePage = lazy(() => import('./components/AffiliatePage/page'));
const AffiliateRoute: FuseRouteItemType = {
  path: 'affiliate', 
  element: <AffiliatePage />
};

export default AffiliateRoute;
