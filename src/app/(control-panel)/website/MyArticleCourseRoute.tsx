
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const MyArticleCoursePage = lazy(() => import('./components/MyArticlesCoursePage/page'));
const MyArticleCourseRoute: FuseRouteItemType = {
  path: 'course-article', 
  element: <MyArticleCoursePage />
};

export default MyArticleCourseRoute;
