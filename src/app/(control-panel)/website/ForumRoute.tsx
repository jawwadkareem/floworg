
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const ForumPage = lazy(() => import('./components/ForumPage/page'));
const ForumRoute: FuseRouteItemType = {
  path: 'forum', 
  element: <ForumPage />
};

export default ForumRoute;
