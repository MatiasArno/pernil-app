import State from '../state';

class Navbar extends HTMLElement {
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
				text-decoration: none;
			}

			navbar {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				height: 100%;
				padding: 0 27px;
				background-color: rgba(255, 255, 255, 0.63);
				border-radius: 27px;
			}

			navbar .logo {
				font-size: 36px;
				font-weight: bold;
				cursor: pointer;
			}

			navbar .logo:hover {
				color: steelblue;
			}
			
			ul {
				display: flex;
				font-size: 27.9px;
				list-style: none;
			}

			ul li {
				margin: 0 18px;
				cursor: pointer;
			}

			ul li:hover {
				color: steelblue;
			}
		`;

		this.shadow.appendChild(style);
	}

	render() {
		const name = this.innerHTML;

		this.shadow.innerHTML = `
			<navbar>
				<div class="logo">${name}</div>

				<ul>
					<li>Compras</li>
					<li>Ventas</li>
				</ul>
			</navbar>
		`;
	}

	listenListeners() {
		const logoEl = this.shadow.querySelector('.logo') as HTMLElement;
		const items = this.shadow.querySelectorAll('li');

		const goToSection = (data: any) => {
			const sectionName = data.target.innerHTML.toLowerCase().trim();
			State.setMainWorkArea = sectionName;
		};

		items.forEach((e) => e.addEventListener('click', goToSection));
		logoEl.addEventListener('click', goToSection);
	}
}

customElements.define('nav-bar', Navbar);
