
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const CalendarPage = lazy(() => import('./components/CalendarPage/page'));
const CalendarRoute: FuseRouteItemType = {
  path: 'calendar', 
  element: <CalendarPage />
};

export default CalendarRoute;
