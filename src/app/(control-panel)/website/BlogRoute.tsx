
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const BlogPage = lazy(() => import('./BlogPage'));
const BlogRoute: FuseRouteItemType = {
  path: 'blog', 
  element: <BlogPage />
};

export default BlogRoute;
