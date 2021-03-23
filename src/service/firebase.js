import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAW__39vJ2--CV2NKwqPcCiR30XSRETleI",
    authDomain: "pokemon-game-78279.firebaseapp.com",
    databaseURL: "https://pokemon-game-78279-default-rtdb.firebaseio.com/",
    projectId: "pokemon-game-78279",
    storageBucket: "pokemon-game-78279.appspot.com",
    messagingSenderId: "926772228609",
    appId: "1:926772228609:web:cc89f186dedc3432768600"
};


firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const dataBase = fire.database();

export default dataBase;