import State from '../state';
import { Router } from '@vaadin/router';

class Grid extends HTMLElement {
	shadow = this.attachShadow({ mode: 'open' });

	constructor() {
		super();
	}

	connectedCallback() {
		const { size, content } = this.attributes as any;

		this.render(content.value);
		this.addStyles(size.value);
		this.listenItemsEvents();
	}

	addStyles(size: string) {
		const style = document.createElement('style');
		const [sizeX, sizeY] = size.split('x');

		style.innerHTML = `
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}
			
			.grid {
				display: grid;
				grid-template-columns: repeat(${sizeX}, 1fr);
				grid-template-rows: repeat(${sizeY}, 1fr);
				grid-gap: 60px;
				justify-content: center;
				align-items: center;

				width: 100%;
				height: 100%;
			}

			.grid .item {
				display: flex;
				justify-content: center;
				align-items: center;

				padding: 18px;

				width: 100%;
				height: 100%;
				font-size: 24px;
				font-weight: bold;
				text-align: center;

				color: white;
				background-color: rgba(255, 255, 255, 0.27);
				border-radius: 18px;
				
				cursor: pointer;
			}

			.grid .item:hover {
				background-color: rgba(255, 255, 255, 0.45);
			}
		`;

		this.shadow.appendChild(style);
	}

	render(elementsData) {
		const items = elementsData.split(',') as string[];

		this.shadow.innerHTML = `
			<div class=grid>
				${items.map((item) => `<div class=item>${item}</div>`).join(' ')}
			</div>
		`;
	}

	listenItemsEvents() {
		const currentPage = location.pathname;

		const items = this.shadow.querySelectorAll('.item') as NodeList;

		items.forEach((element) =>
			element.addEventListener('click', (e: any) => {
				const page = e.target.innerHTML.toLowerCase();

				console.log(`${currentPage}/${page}`);

				Router.go(`${currentPage}/${page}`);
			})
		);
	}
}

customElements.define('custom-grid', Grid);
