
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const AccessibilityStatementPage = lazy(() => import('./components/AccessibilityStatementPage/page'));
const AccessibilityStatementRoute: FuseRouteItemType = {
  path: 'accessibility-statement', 
  element: <AccessibilityStatementPage />
};

export default AccessibilityStatementRoute;
