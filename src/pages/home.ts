class HomePage extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
			<nav-bar> DASHBOARD </nav-bar>
        `;
	}
}

customElements.define('home-page', HomePage);
