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
			
			.main .categories {
				display: flex;
				justify-content: center;
				align-items: center;

				z-index: 101;
			}

			.main .categories .category {
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

			form {
				position: relative;
				display: none;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 300px;
				height: 300px;
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

			form .formButton {
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

			.main .button:hover {
				background-color: rgba(255, 255, 255, 0);
				color: white;
			}

			.main .formButton:hover {
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

				<form class=categoryNameModal>
					<div>
						<h3 class=title> Nueva categoría </h3>
					</div>
	
					<input type=text name=categoryName placeholder=Nombre required class=input />
					<input type=submit value=✓ class=formButton />
				</form>

				<div class=categories>
					${(() => `<div class=category> TEST </div>`)()}
				</div>

				<div class=button> Crear </div>
			</section>
		`;
	}

	listenListeners() {
		const categoriesModalEl = this.shadow.querySelector(
			'.categoryNameModal'
		) as HTMLElement;

		const createButton = this.shadow.querySelector(
			'.button'
		) as HTMLElement;

		const formEl = this.shadow.querySelector('form') as HTMLElement;

		const showModal = () => (categoriesModalEl.style.display = 'flex');
		createButton.addEventListener('click', showModal);

		formEl.addEventListener('submit', (e: any) => {
			e.preventDefault();

			const categoryName = e.target.categoryName.value;
			const createdCategory = State.createNewCategory(categoryName);
			categoriesModalEl.style.display = 'none';
			e.target.categoryName.value = '';
		});
	}
}

customElements.define('products-space', Products);
