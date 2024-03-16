import State from '../state';

class Dashboard extends HTMLElement {
	shadow = this.attachShadow({ mode: 'open' });

	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
		this.addStyles();
		this.listenListeners();
	}

	addStyles() {
		const style = document.createElement('style');

		style.innerHTML = `
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}

			.workspace {
				display: flex;
				align-items: center;
				justify-content: space-evenly;
				width: 100%;
				height: 100%;
				background-color: rgba(255, 255, 255, 0.207);
				border: 2px solid white;
				border-radius: 27px;
			}
			
			.workspace div {
				display: flex;
				justify-content: center;
				align-items: center;

				width: 200px;
				height: 90px;
				font-size: 24px;
				font-weight: bold;

				color: white;
				background-color: rgba(255, 255, 255, 0.306);
				border-radius: 18px;

				cursor: pointer;
			}

			.workspace div:hover {
				background-color: rgba(255, 255, 255, 0.207);
				border: 2px solid white;
			}
		`;

		this.shadow.appendChild(style);
	}

	render() {
		this.shadow.innerHTML = `
			<div class="workspace"> 
				<div class=categories>Productos</div>
				<div class=categories>Combos</div>
				<div class=categories>Servicios</div>
				<div class=categories>Salarios</div>
			</div>
		`;
	}

	listenListeners() {
		const categoriesElements = this.shadow.querySelectorAll('.categories');
		categoriesElements.forEach((element) =>
			element.addEventListener('click', () => {
				State.setMainWorkArea = element.innerHTML.toLowerCase();
			})
		);
	}
}

customElements.define('dash-board', Dashboard);
