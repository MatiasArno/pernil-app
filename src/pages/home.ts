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
			productos: '<products-space></products-space>',
		};

		this.innerHTML = `
			<section class="home__container">
				<nav-bar> DASHBOARD </nav-bar>

				${componentSelector[currentWorkArea]}
			</section>
        `;
	}
}

customElements.define('home-page', HomePage);
