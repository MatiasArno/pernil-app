import { set, getDBRef, push } from '../database/connection';

async function createNew(data: any) {
	const categoriesRef = getDBRef('categories');
	const newCategoriesRef = push(categoriesRef);

	set(newCategoriesRef, data);
}

export { createNew };
