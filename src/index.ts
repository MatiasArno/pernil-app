import { Router } from '@vaadin/router';
import State from './state';

import './model/database/connection';
import './router';
import './pages/login';
import './pages/home';
import './components/navbar';
import './components/custom-grid';
import './components/dashboard';
import './components/products';
import './components/product';

// import './components/input-modal';

(async function main() {
	await State.init();

	window.addEventListener('load', () => {
		const currentURL = location.pathname;
		if (currentURL === '/') return Router.go('/');
	});
})();
