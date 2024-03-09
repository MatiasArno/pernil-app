abstract class State {
	private static _data: {};
	private static _listeners: any[];

	static async init() {
		// Conexión con RTDB
	}

	static get getState() {
		return State._data;
	}

	set setState(newState: Object) {
		State._data = newState as any;

		for (const cb of State._listeners) {
			cb();
		}
	}

	static subscribe(callback: (any: any) => any) {
		this._listeners.push(callback);
	}

	// static setJWTTokenInLocalStorage(token: string) {
	// 	localStorage.setItem('token', token);
	// }

	// static async fetchUserToken(input: string, options = {}) {
	// 	const savedToken = localStorage.getItem('token');

	// 	if (savedToken) {
	// 		options['headers'] ||= {};
	// 		options['headers']['Authorization'] = `bearer ${savedToken}`;
	// 	}

	// 	return fetch(input, options);
	// }

	// static async login(userData: { username: string; password: string }) {
	// 	const { username, password } = userData;

	// 	const response = await fetch('', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({
	// 			username,
	// 			password,
	// 		}),
	// 	});

	// 	const resJSON = await response.json();
	// 	if (resJSON.err) return false;

	// 	const { token } = resJSON;
	// 	this.setJWTTokenInLocalStorage(token);
	// 	return true;
	// }

	// static logout() {
	// 	localStorage.removeItem('token');
	// }
}

export default State;
