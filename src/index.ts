import { Router } from '@vaadin/router';
import State from './state';

import './router';
import './pages/login';
import './pages/home';
import './components/navbar';
import './components/dashboard';
import './components/work-space';

(async function main() {
	await State.init();

	window.addEventListener('load', () => {
		const currentURL = location.pathname;
		if (currentURL === '/') return Router.go('/');
	});
})();
