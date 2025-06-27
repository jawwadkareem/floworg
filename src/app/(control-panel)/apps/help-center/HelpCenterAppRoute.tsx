import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const HelpCenterApp = lazy(() => import('./HelpCenterApp'));

/**
 * The Help Center App Route.
 */
const HelpCenterAppRoute: FuseRouteItemType = {
	path: 'apps/help-center',
	element: <HelpCenterApp />,
	children: [
		{
			path: '',
			element: <></>
		},
		{
			path: 'faqs',
			element: <></>
		},
		{
			path: 'guides',
			element: <></>,
			children: [
				{
					path: '',
					element: <></>
				},
				{
					path: ':categorySlug',
					element: <></>
				},
				{
					path: ':categorySlug/:guideId',
					element: <></>
				}
			]
		},
		{
			path: 'support',
			element: <></>
		}
	]
};

export default HelpCenterAppRoute;
