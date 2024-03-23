import * as categories from './model/services/categories';
import loadCategories from './model/services/changes-listener';

abstract class State {
	private static _data: {};
	private static _listeners: any[] = [];
	private static _mainWorkArea: string = 'dashboard';

	private static _categories: string[] = [];

	private static _executeListeners() {
		for (const cb of State._listeners) {
			cb();
		}
	}

	static async init() {
		loadCategories();
	}

	static set setState(newState: any) {
		State._data = newState;
		State._executeListeners();
	}

	static set setMainWorkArea(area: string) {
		State._mainWorkArea = area;
		State._executeListeners();
	}

	static set setCategories(categories: string[]) {
		State._categories = categories;
		State._executeListeners();
	}

	static get getState() {
		return State._data;
	}

	static get getMainWorkArea() {
		return State._mainWorkArea;
	}

	static get getCategories() {
		return State._categories;
	}

	static subscribe(callback: (any: any) => any) {
		this._listeners.push(callback);
	}

	static createNewCategory(name: string) {
		const createdCategory = categories.createNew(name);
		return createdCategory;
	}
}

export default State;
