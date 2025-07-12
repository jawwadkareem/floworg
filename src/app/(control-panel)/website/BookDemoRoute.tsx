
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const BookDemoPage = lazy(() => import('./components/BookDemoPage/page'));
const BookDemoRoute: FuseRouteItemType = {
  path: 'bookademo', 
  element: <BookDemoPage />
};

export default BookDemoRoute;
