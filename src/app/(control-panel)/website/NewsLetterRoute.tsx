
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const NewsLetterPage = lazy(() => import('./components/NewsLetterPage/page'));
const NewsLetterRoute: FuseRouteItemType = {
  path: 'newsletter', 
  element: <NewsLetterPage />
};

export default NewsLetterRoute;
