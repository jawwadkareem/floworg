// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const TermsPage = lazy(() => import('./components/TermsPage/page'));
const TermsRoute: FuseRouteItemType = {
  path: 'terms', 
  element: <TermsPage />
};

export default TermsRoute;
