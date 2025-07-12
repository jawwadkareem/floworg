
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const FeaturePage = lazy(() => import('./components/FeaturePage/page'));
const FeatureRoute: FuseRouteItemType = {
  path: 'feature', 
  element: <FeaturePage />
};

export default FeatureRoute;
