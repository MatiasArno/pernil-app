class Dashboard extends HTMLElement {
	shadow = this.attachShadow({ mode: 'open' });

	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
		this.addStyles();
	}

	addStyles() {
		const style = document.createElement('style');

		style.innerHTML = `
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}

			.categories {
				display: flex;
				justify-content: center;
				align-items: center;

				width: 100%;
				height: 100%;

				background-color: rgba(255, 255, 255, 0.207);
				border: 2px solid white;
				border-radius: 27px;
			}

			custom-grid {
				width: calc(100% - 306px);
				height: calc(100% - 390px);
			}
		`;

		this.shadow.appendChild(style);
	}

	render() {
		this.shadow.innerHTML = `
			<div class="categories"> 
				<custom-grid size=3x2 content=Productos,Combos,Servicios,Salarios></custom-grid>
			</div>
		`;
	}
}

customElements.define('dash-board', Dashboard);
