import { Router } from '@vaadin/router';

const router = new Router(document.querySelector('.root'));

router.setRoutes([
	{ path: '/', component: 'login-page' },
	{
		path: '/home',
		component: 'home-page',
		children: [
			{ path: '/', component: 'dash-board' },
			{ path: '/productos', component: 'products-component' },
			{ path: '/productos/:product', component: 'custom-product' },
		],
	},
]);

export { Router };
