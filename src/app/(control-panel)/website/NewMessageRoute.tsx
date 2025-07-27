
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const NewMessagePage = lazy(() => import('./components/NewMessagePage/page'));
const NewMessageRoute: FuseRouteItemType = {
  path: 'new-message', 
  element: <NewMessagePage />
};

export default NewMessageRoute;
