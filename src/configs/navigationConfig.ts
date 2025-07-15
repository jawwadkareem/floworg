import i18n from '@i18n';
import { FuseNavItemType } from '@fuse/core/FuseNavigation/types/FuseNavItemType';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
import SettingsAppNavigation from '../app/(control-panel)/apps/settings/SettingsAppNavigation';

i18n.addResourceBundle('en', 'navigation', en);
i18n.addResourceBundle('tr', 'navigation', tr);
i18n.addResourceBundle('ar', 'navigation', ar);

/**
 * The x object is an array of navigation items for the Fuse application.
 */
const navigationConfig: FuseNavItemType[] = [
	
	{
		id:'website',
		title:'Website',
		type:'group',
		translate:'WEBSITE',
		children:[
			{
				id:'website.home_page',
				title:'Home Page',
				type:'item',
				url:'/home'
			},
			{
				id:'website.services',
				title:'Services',
				type:'item',
				url:'/services'
			},
			{
				id:'website.use',
				title:'Use Cases',
				type:'item',
				url:'/home'
			},
			{
				id:'website.pricing',
				title:'Pricing',
				type:'item',
				url:'/pricing'
			},
			{
				id:'website.projects',
				title:'Projects',
				type:'item',
				url:'/projects'
			},
			{
				id:'website.academy',
				title:'Academy',
				type:'item',
				url:'/academy'
			},
			{
				id:'website.blog',
				title:'Blog',
				type:'item',
				url:'/blog'
			},
			{
				id:'website.demo',
				title:'Book a Demo',
				type:'item',
				url:'/bookademo'
			},
			{
				id:'website.news',
				title:'Newsletters',
				type:'item',
				url:'/newsletter'
			},
			{
				id:'website.support',
				title:'Support',
				type:'item',
				url:'/support'				
			}

			
		]
	},

	{
		id: 'apps',
		title: 'Applications',
		type: 'group',
		icon: 'heroicons-outline:cube',
		translate: 'APPLICATIONS',
		children: [
			{
				id: 'apps.ai-image-generator',
				title: 'FlowOrg OmniAi 360',
				type: 'item',
				url: '/service1',
				
			},
			{
				id: 'apps.academy',
				title: 'FlowOrg SYS 360 - All in One',
				type: 'item',
				url: '/apps/academy',
			},
			
		]
	},
	
	{
		id: 'dashboards',
		title: 'Home',
		type: 'group',
		icon: 'heroicons-outline:home',
		translate: 'DASHBOARDS',
		children: [
			{
				id: 'dashboards.project',
				title: 'My Dashboards',
				type: 'item',
				url: '/home'
			},
			{
				id: 'dashboards.analytics',
				title: 'Inbox',
				type: 'item',
				url: '/home'
			},
			{
				id: 'dashboards.finance',
				title: 'Personal Area',
				type: 'collapse',
				children:[
					{
						id:'dashboards.personal_area.my_courses',
						title:'My Courses',
						type:'item',
						url:'/home'
					},
					{
						id:'dashboards.personal_area.my_knowledge_base',
						title:'My Knowledge Base',
						type:'item',
						url:'/knowledgebase'
					},
					{
						id:'dashboards.personal_area.my_tutorial_videos',
						title:'My Tutorial Videos',
						type:'item',
						url:'/home'
					},
					{
						id:'dashboards.personal_area.my_blogs',
						title:'My Blogs',
						type:'item',
						url:'/home'
					},
					{
						id:'dashboards.personal_area.my_account',
						title:'My Account',
						type:'item',
						url:'/home'
					},
					{
						id:'dashboards.personal_area.my_security',
						title:'My Security',
						type:'item',
						url:'/home'
					}
				]
			},
			{
				id: 'dashboards.crypto',
				title: 'Workspaces',
				type: 'item',
				url: '/home'
			},
			{
				id: 'dashboards.my_projects',
				title: 'My Projects',
				type: 'item',
				url: '/home'
			},
			{
				id: 'dashboards.plans',
				title: 'Plans and Billing',
				type: 'item',
				url: '/home'
			},
			{
				id: 'dashboards.company_profile',
				title: 'Company Profile',
				type: 'item',
				url: '/home'
			},
			{
				id: 'dashboards.teams',
				title: 'Team and Permissions',
				type: 'item',
				url: '/home'
			},
			{
				id: 'dashboards.whitelist',
				title: 'Whitelist IP',
				type: 'item',
				url: '/home'
			},
			{
				id: 'dashboards.timeline',
				title: 'Timeline',
				type: 'item',
				url: '/home'
			},
			{
				id: 'dashboards.activities',
				title: 'Activities',
				type: 'item',
				url: '/home'
			},
		]
	},
	
	{
		id: 'pages',
		title: 'Partners & Loyalty',
		type: 'group',
		children: [
			{
				id: 'pages.activities',
				title: 'Partners Area',
				type: 'item',
				url: '/pages/activities'
			},
			
			
			
			{
				id: 'pages.maintenance',
				title: 'Affliate Program',
				type: 'item',
				url: '/pages/maintenance'
			},
			{
			id: 'pages.developers',
			title: 'Developers Program',
			type: 'item',
			url: '/home'
		},

		
		]
	},

	{
		id: 'story',
		title: 'FlowOrg Story',
		type: 'group',
		children: [
			{
				id: 'story.about',
				title: 'About',
				type: 'item',
				url: '/home'
			},
			
			
			
			{
				id: 'story.timeline',
				title: 'Timeline',
				type: 'item',
				url: '/home'
			},
			{
			id: 'story.contact',
			title: 'Contact Us',
			type: 'item',
			url: '/home'
		},

		
		]
	},
	{
		id: 'story',
		title: 'Investor Relations',
		type: 'group'
	},

	{
		id: 'careers',
		title: 'Careers and Tenders',
		type: 'group',
		children: [
			{
				id: 'careers.careers',
				title: 'Careers',
				type: 'item',
				url: '/home'
			},
			
			
			
			{
				id: 'careers.tenders',
				title: 'Tenders',
				type: 'item',
				url: '/home'
			},
			{
			id: 'careers.employee',
			title: 'Employee Area',
			type: 'item',
			url: '/home'
		},

		
		]
	},

	{
		id: 'terms',
		title: 'Terms',
		type: 'group',
		children: [
			{
				id: 'terms.website',
				title: 'Website Terms',
				type: 'item',
				url: '/home'
			},
			
			
			
			{
				id: 'terms.refund',
				title: 'Refund Policy',
				type: 'item',
				url: '/home'
			},
			{
			id: 'terms.privacy',
			title: 'Privacy Policy',
			type: 'item',
			url: '/home'
		},

		{
			id:'terms.accessiblity_statement',
			title:'Accessibility Statement',
			type:'item',
			url:'/home'
		}

		
		]
	},
	
];

export default navigationConfig;
