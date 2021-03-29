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

class FireBase {

    constructor() {
        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonSoket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            cb(snapshot.val());
        })
    }

    offPokemonSoket = () => {
        this.database.ref('pokemons').off();
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then((snapshot) => snapshot.val());
    }

    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon);
    }

    addPokemon = (data) => {
        const newKey = this.database.ref().child('pokemons').push().key;
        this.database.ref(`pokemons/` + newKey).set(data);
    }
}

const FireBaseClass = new FireBase();

export default FireBaseClass;