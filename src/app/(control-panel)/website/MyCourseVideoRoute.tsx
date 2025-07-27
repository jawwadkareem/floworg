
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const MyCourseVideoPage = lazy(() => import('./components/MyCourseVideoPage/page'));
const MyCourseVideoRoute: FuseRouteItemType = {
  path: 'course-video', 
  element: <MyCourseVideoPage />
};

export default MyCourseVideoRoute;
