
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const BlogArticlePage = lazy(() => import('./BlogArticlePage'));
const BlogArticleRoute: FuseRouteItemType = {
  path: 'blog-article', 
  element: <BlogArticlePage />
};

export default BlogArticleRoute;
