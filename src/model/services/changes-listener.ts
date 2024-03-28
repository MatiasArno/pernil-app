import { onValue, getDBRef } from '../database/connection';
import State from '../../state';

const getCreatedCategories = () => {
	const categoriesRef = getDBRef('categories');

	onValue(categoriesRef, (snapshot) => {
		if (!snapshot.exists())
			return (State.setCategories = ['Nada por aquí....']);

		const data = snapshot.val();
		const categories = Object.values(data) as string[];

		State.setCategories = categories;
	});
};

export default getCreatedCategories;
