import { initializeApp } from 'firebase/app';
import {
	getDatabase,
	ref,
	set,
	update,
	onValue,
	push,
	child,
	get,
} from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyCk59qMx_vFOqIbPUUyp4KdOgmTn75y0Tk',
	authDomain: 'pernil-app.firebaseapp.com',
	databaseURL: 'https://pernil-app-default-rtdb.firebaseio.com',
	projectId: 'pernil-app',
	storageBucket: 'pernil-app.appspot.com',
	messagingSenderId: '947904277565',
	appId: '1:947904277565:web:bc752ba24bbd649b9b8e54',
};

initializeApp(firebaseConfig);

const database = getDatabase();
const databaseRef = ref(getDatabase());
const getDBRef = (path: string) => ref(database, path);

export { getDBRef, database, databaseRef, set, onValue, child, get, update, push };
