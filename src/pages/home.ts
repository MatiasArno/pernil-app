import State from '../state';

class HomePage extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();

		State.subscribe(() => this.render());
	}

	render(data: any = null) {
		const { mainComponent } = data;

		const componentSelector = {
			dashboard: () => '<dash-board></dash-board>',
			categories: () => '<work-space></work-space>',
		};

		this.innerHTML = `
			<section class="home__container">
				<nav-bar> PERNIL </nav-bar>

				${mainComponent}
			</section>
        `;
	}
}

customElements.define('home-page', HomePage);
