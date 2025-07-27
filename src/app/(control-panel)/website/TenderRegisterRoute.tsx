// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const TenderRegisterPage = lazy(() => import('./components/TenderRegisterPage/page'));
const TenderRegisterRoute: FuseRouteItemType = {
  path: 'tender-register', 
  element: <TenderRegisterPage />
};

export default TenderRegisterRoute;
