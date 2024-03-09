// Este módulo simula las peticiones a la DB

import debtors from './debtors.json';

const getAllDebtors = async () => debtors;

const getDebtorByID = async (id: string) =>
	debtors.find((debtor) => id === debtor.id);

export { getAllDebtors, getDebtorByID };
