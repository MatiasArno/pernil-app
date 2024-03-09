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
				width: 100%;
				height: 100%;
				padding: 0 27px;
				background-color: rgba(255, 255, 255, 0.72);
				border-radius: 27px;
			}

			navbar .logo {
				font-size: 36px;
				font-weight: bold;
				padding: 0 27px 0 0;
				flex-grow: 1;
			}
			
			ul {
				display: flex;
				justify-content: space-between;
				font-size: 30.6px;
				list-style: none;
				flex-grow: 1;
			}

			ul li {
				cursor: pointer;
			}

			ul li:hover {
				font-weight: bold;
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
					<li>Categorías</li>
					<li>Compras</li>
					<li>Ventas</li>
				</ul>
			</navbar>
		`;
	}

	listenListeners() {
		const items = this.shadow.querySelectorAll('li');
		const callback = (data: any) => console.log(data.target);

		items.forEach((e) => e.addEventListener('click', callback));
	}
}

customElements.define('nav-bar', Navbar);
