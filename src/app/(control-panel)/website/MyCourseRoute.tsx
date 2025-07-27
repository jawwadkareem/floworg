
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const MyCoursePage = lazy(() => import('./components/MyCoursePage/page'));
const MyCourseRoute: FuseRouteItemType = {
  path: 'course', 
  element: <MyCoursePage />
};

export default MyCourseRoute;
