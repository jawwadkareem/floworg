
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const CareerArticlesPage = lazy(() => import('./components/CareersArticlePage/page'));
const CareerArticlesRoute: FuseRouteItemType = {
  path: 'career-articles', 
  element: <CareerArticlesPage />
};

export default CareerArticlesRoute;
