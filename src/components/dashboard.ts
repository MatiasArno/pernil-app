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

			.dashboard {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				height: 100%;
				background-color: rgba(255, 255, 255, 0.207);
				border: 2px solid white;
				border-radius: 27px;
			}
		`;

		this.shadow.appendChild(style);
	}

	render() {
		this.shadow.innerHTML = `
			<div class="dashboard"> 
				D A S H B O A R D
			</div>
		`;
	}
}

customElements.define('dash-board', Dashboard);
