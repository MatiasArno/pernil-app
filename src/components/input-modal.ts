import State from '../state';

class InputModal extends HTMLElement {
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
			
			form {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100%;
				font-weight: bolder;
				color: #2c5364;
				border-radius: 27px 0 27px 0;
				border: 2px solid white;
			}
		`;

		this.shadow.appendChild(style);
	}

	render() {
		this.shadow.innerHTML = `
			<form name=categoryName class=categoryNameModal>
				<input type=text placeholder=Nombre required />
				<input type=submit value=Listo />
			</form>
		`;
	}

	listenListeners() {
	}
}

customElements.define('input-modal', InputModal);
