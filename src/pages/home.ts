import State from '../state';

class HomePage extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
		State.subscribe(() => this.render());
	}

	render() {
		const currentWorkArea = State.getMainWorkArea;

		const componentSelector = {
			dashboard: '<dash-board></dash-board>',
			categories: '<work-space></work-space>',
		};

		this.innerHTML = `
			<section class="home__container">
				<nav-bar> PERNIL </nav-bar>

				${componentSelector[currentWorkArea]}
			</section>
        `;
	}
}

customElements.define('home-page', HomePage);
