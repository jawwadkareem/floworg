// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const TemplatesPage = lazy(() => import('./components/TemplatesPage/page'));
const TemplatesRoute: FuseRouteItemType = {
  path: 'templates', 
  element: <TemplatesPage />
};

export default TemplatesRoute;
