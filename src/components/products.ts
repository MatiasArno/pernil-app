class Products extends HTMLElement {
	shadow = this.attachShadow({ mode: 'open' });

	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
		this.addStyles();
		this.listenCategoriesEvents();
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
			
			.main .categories {
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
				<div class=background>P R O D U C T O S</div>

				<div class=categories>
					<custom-grid size=3x2 content=Carnes,Verduras,Especias,Panificados,Salsas></custom-grid>
				</div>
			</section>
		`;
	}

	listenCategoriesEvents() {
		const categoriesElements = this.shadow.querySelectorAll(
			'.category'
		) as NodeList;

		categoriesElements.forEach((element) =>
			element.addEventListener('click', (e) => console.log(e.target))
		);
	}
}

customElements.define('products-component', Products);
