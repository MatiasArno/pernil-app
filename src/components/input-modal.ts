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
				border-radius: 27px;
				border: 2px solid white;
			}

			form .input {
				width: 90%;
				height: 36px;
				height: 45px;
				outline: none;
				border: none;
				background-color: rgba(255, 255, 255, 0.144);
				color: white;
				font-size: 18px;
				text-align: center;
			}

			form .input::placeholder {
				color: rgba(255, 255, 255, 0.63);
			}

			form .input:focus {
				background-color: rgba(255, 255, 255, 0.27);
			}

			form div {
				display: flex;
				justify-content: center;
				align-items: center;
				position: absolute;
				top: 0;
				padding-top: 18px;
				width: 100%;

				font-size: 21px;
				font-weight: bolder;
				color: white;
			}

			form .button {
				position: absolute;
				padding: 3px 0;
				bottom: -2px;
				width: 100%;

				background-color: white;
				font-size: 54px;
				font-weight: bolder;
				color: #2c5364;

				border: none;
				border-top: 2px solid white;
				border-radius: 0 0 27px 27px;
				cursor: pointer;
			}

			form .button:hover {
				background-color: rgba(255, 255, 255, 0);
				color: white;
			}
		`;

		this.shadow.appendChild(style);
	}

	render() {
		this.shadow.innerHTML = `
			<form class=categoryNameModal>
				<div>
					<h3 class=title> Nueva categoría </h3>
				</div>

				<input type=text name=categoryName placeholder=Nombre required class=input />
				<input type=submit value=✓ class=button />
			</form>
		`;
	}

	listenListeners() {
		const formEl = this.shadow.querySelector('form') as HTMLElement;

		formEl.addEventListener('submit', (e: any) => {
			e.preventDefault();
			console.log(e.target.categoryName.value);
		});
	}
}

customElements.define('input-modal', InputModal);
