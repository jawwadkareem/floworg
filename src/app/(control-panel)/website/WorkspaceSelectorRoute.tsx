// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const WorkspaceSelector = lazy(() => import('./WorkspaceSelector'));
const WorkspaceSelectorPageRoute: FuseRouteItemType = {
  path: 'workspace', 
  element: <WorkspaceSelector />
};

export default WorkspaceSelectorPageRoute;
