import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';


const ContactsApp = lazy(() => import('./ContactsApp'));

/**
 * The ContactsApp Route.
 */
const ContactsAppRoute: FuseRouteItemType = {
	path: 'apps/contacts',
	element: <ContactsApp />,
	children: [
		{
			path: ':contactId',
			element: <></>
		},
		{
			path: ':contactId/edit',
			element: <></>
		}
	]
};

export default ContactsAppRoute;
