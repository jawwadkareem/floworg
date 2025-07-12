
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const KnowledgeBasePage = lazy(() => import('./components/KnowledgeBasePage/page'));
const KnowledgeBaseRoute: FuseRouteItemType = {
  path: 'knowledgebase', 
  element: <KnowledgeBasePage />
};

export default KnowledgeBaseRoute;
