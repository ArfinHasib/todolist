import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBhGnBM2a8ZAIkf4nc3dXjkIAZW-FUX2sU",
	authDomain: "todo-list-e12c9.firebaseapp.com",
	projectId: "todo-list-e12c9",
	storageBucket: "todo-list-e12c9.appspot.com",
	messagingSenderId: "456040636895",
	appId: "1:456040636895:web:77151726148978fce8a46a",
	measurementId: "G-G49XFH2FMF",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db };
