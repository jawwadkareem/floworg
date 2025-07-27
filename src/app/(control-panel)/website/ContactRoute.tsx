
import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const ContactPage = lazy(() => import('./components/ContactPage/page'));
const ContactRoute: FuseRouteItemType = {
  path: 'contact', 
  element: <ContactPage />
};

export default ContactRoute;
