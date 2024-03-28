import State from '../state';

class Product extends HTMLElement {
	shadow = this.attachShadow({ mode: 'open' });

	constructor() {
		super();
	}

	connectedCallback() {
		console.log(location.pathname);

		this.render();
		this.addStyles();
		this.listenItemsEvents();
	}

	addStyles() {
		const style = document.createElement('style');

		style.innerHTML = `
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}

			.main {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;

				width: 100%;
				height: 100%;
				background-color: rgba(255, 255, 255, 0.207);
				border: 2px solid white;
				border-radius: 27px;

				z-index: 100;
			}

			.background {
				display: flex;
				position: absolute;
				top: 0;

				font-weight: bolder;
				font-size: 5.4dvw;
				color: rgba(255, 255, 255, 0.27);

				z-index: 0;
			}
			
			.main .products {
				width: calc(100% - 306px);
				height: calc(100% - 390px);

				z-index: 101;
			}
		`;

		this.shadow.appendChild(style);
	}

	render() {
		this.shadow.innerHTML = `
			<section class="main">
				<div class=background>P R O D U C T O S | CARNES</div>

				<div class=products>
					<custom-grid size=3x3 content=A,B,C,D,E,F,G,H,I></custom-grid>
				</div>
			</section>
		`;
	}

	listenItemsEvents() {
		const items = this.shadow.querySelectorAll('.items') as NodeList;

		items.forEach((element) =>
			element.addEventListener('click', (e: any) =>
				console.log(e.target.innerHTML)
			)
		);
	}
}

customElements.define('custom-product', Product);
