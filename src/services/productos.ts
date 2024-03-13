import getDatabase from './database-connection';

const getProducts = () => {
	const database = getDatabase();
	const { productos } = database;

	return productos;
};

export { getProducts };
