// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDuQ1P7uoqdXmmmEuKqxQwVmVexNnLcv3Q',
	authDomain: 'mrpro-maz.firebaseapp.com',
	databaseURL: 'https://mrpro-maz.firebaseio.com',
	projectId: 'mrpro-maz',
	storageBucket: 'mrpro-maz.appspot.com',
	messagingSenderId: '153209028692',
	appId: '1:153209028692:web:35caea5149677a03',
	measurementId: 'G-FF0GGL0KK7'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
