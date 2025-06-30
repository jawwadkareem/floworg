// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const SupportPage = lazy(() => import('./SupportPage'));
const SupportPageRoute: FuseRouteItemType = {
  path: 'support', 
  element: <SupportPage />
};

export default SupportPageRoute;
