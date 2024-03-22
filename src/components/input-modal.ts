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
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100%;
				font-weight: bolder;
				border-radius: 27px 0 27px 0;
				border: 2px solid white;
			}

			form .input {
				width: 90%;
				height: 36px;
			}

			form div {
				position: absolute;
				display: flex;
				justify-content: center;
				align-items: center;
				color: white;
				width: 100%;
				height: 45px;
				border-bottom: 2px solid white;
				top: 0;
			}

			form .button {
				position: absolute;
				bottom: 0;
				width: 100%;
				height: 45px;
				color: #2c5364;
				border: none;
				border-radius: 0 0 27px 0;
			}
		`;

		this.shadow.appendChild(style);
	}

	render() {
		this.shadow.innerHTML = `
			<form name=categoryName class=categoryNameModal>
				<div>
					<h3 class=title> Nueva categoría </h3>
				</div>

				<input type=text placeholder=Nombre required class=input />
				<input type=submit value=Listo class=button />
			</form>
		`;
	}

	listenListeners() {
	}
}

customElements.define('input-modal', InputModal);
