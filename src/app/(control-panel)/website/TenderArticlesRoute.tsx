// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const TenderArticlesPage = lazy(() => import('./components/TenderArticlesPage/page'));
const TenderArticlesRoute: FuseRouteItemType = {
  path: 'tender-articles', 
  element: <TenderArticlesPage />
};

export default TenderArticlesRoute;
