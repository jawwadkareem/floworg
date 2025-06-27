import { lazy } from 'react';
import { Navigate } from 'react-router';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const ECommerceApp = lazy(() => import('./ECommerceApp'));


/**
 * The E-Commerce app Routes.
 */
const ECommerceAppRoute: FuseRouteItemType = {
	path: 'apps/e-commerce',
	element: <ECommerceApp />,
	children: [
		{
			path: '',
			element: <Navigate to="products" />
		},
		{
			path: 'products',
			children: [
				{
					path: '',
					element: <></>
				},
				{
					path: ':productId/:handle?',
					element: <></>
				}
			]
		},
		{
			path: 'orders',
			children: [
				{
					path: '',
					element: <></>
				},
				{
					path: ':orderId',
					element: <></>
				}
			]
		}
	]
};

export default ECommerceAppRoute;
