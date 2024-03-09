class WorkSpace extends HTMLElement {
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

			.workspace {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				height: 100%;
				background-color: rgba(255, 255, 255, 0.72);
				border-radius: 27px;
			}
		`;

		this.shadow.appendChild(style);
	}

	render() {
		this.shadow.innerHTML = `
			<div class="workspace"> 
				<div>Productos</div>
				<div>Insumos</div>
				<div>Servicios</div>
			</div>
		`;
	}
}

customElements.define('work-space', WorkSpace);
