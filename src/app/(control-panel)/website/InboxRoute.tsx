
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const InboxPage = lazy(() => import('./components/InboxPage/page'));
const InboxRoute: FuseRouteItemType = {
  path: 'inbox', 
  element: <InboxPage />
};

export default InboxRoute;
