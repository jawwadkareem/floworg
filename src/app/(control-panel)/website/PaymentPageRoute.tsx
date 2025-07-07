// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const PaymentPage = lazy(() => import('./PaymentPage'));
const PaymentPageRoute: FuseRouteItemType = {
  path: 'payment', 
  element: <PaymentPage />
};

export default PaymentPageRoute;
