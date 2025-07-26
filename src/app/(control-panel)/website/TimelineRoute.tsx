// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const TimelinePage = lazy(() => import('./components/TimelinePage/page'));
const TimelineRoute: FuseRouteItemType = {
  path: 'timeline', 
  element: <TimelinePage />
};

export default TimelineRoute;
