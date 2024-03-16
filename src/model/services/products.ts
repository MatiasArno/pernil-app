import { set, getDBRef } from '../database/connection';

function writeUserData(data: any) {
	const dbRef = getDBRef('products/');

	set(dbRef, {
		username: name,
	});
}
