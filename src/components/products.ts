import State from '../state';

class Products extends HTMLElement {
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
				display: flex;

				z-index: 101;
			}
			
			.main .products .categories {
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

			.main .categories:hover {
				background-color: rgba(255, 255, 255, 0.207);
				border: 2px solid white;
			}

			.main .button {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 180px;
				height: 81px;

				background-color: white;
				font-size: 45px;
				font-weight: bolder;
				color: #2c5364;
				border-radius: 27px 0 27px 0;
				border: 2px solid white;

				position: absolute;
				bottom: -2px;
				right: -2px;

				cursor: pointer;
			}

			.main .button:hover {
				background-color: rgba(255, 255, 255, 0);
				color: white;
			}
		`;

		this.shadow.appendChild(style);
	}

	render() {
		this.shadow.innerHTML = `
			<section class="main">
				<div class=background>P R O D U C T O S</div>

				<div class=products>
					Nada por aqui...
				</div>

				<div class=button> Crear </div>
			</section>
		`;
	}

	listenListeners() {
		const categoriesElements = this.shadow.querySelectorAll('.categories');
		const createButton = this.shadow.querySelector(
			'.button'
		) as HTMLElement;

		const callback = (element: any) =>
			console.log(element.target.innerHTML);

		categoriesElements.forEach((element) =>
			element.addEventListener('click', callback)
		);

		createButton.addEventListener('click', callback);
	}
}

customElements.define('products-space', Products);
