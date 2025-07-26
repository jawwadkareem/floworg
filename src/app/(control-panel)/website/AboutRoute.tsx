
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const AboutPage = lazy(() => import('./components/AboutPage/page'));
const AboutRoute: FuseRouteItemType = {
  path: 'about', 
  element: <AboutPage />
};

export default AboutRoute;
