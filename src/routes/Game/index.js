import Layout from "../../components/Layout";
import bg3 from "./bg3.jpg";
import s from "./style.module.css";
import PokemonCard from "../../components/PokemonCard";
import {useState, useEffect} from 'react';
import database from '../../service/firebase';

// TODO: add form for adding new pokemon and create class for storing object entity model
const createTemplatePokemon = (id) => ({
    "abilities" : [ "keen-eye", "tangled-feet", "big-pecks" ],
    "base_experience" : 122,
    "height" : 11,
    id,
    "img" : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png`,
    "name" : "pidgeotto",
    "stats" : {
        "attack" : 60,
        "defense" : 55,
        "hp" : 63,
        "special-attack" : 50,
        "special-defense" : 50,
        "speed" : 71
    },
    "type" : "flying",
    "values" : {
        "bottom" : 7,
        "left" : 5,
        "right" : 2,
        "top" : "A"
    }
});

const GamePage = () => {
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val())
        })
    }, []);

    const onCardClick = (id) => {
        let objID = null;

        const updatedPokemons = Object.entries(pokemons).reduce((acc, item) => {
            const pokemon = {...item[1]};

            if (pokemon.id === id) {
                objID =	 item[0];
                pokemon.active = !pokemon.active;
            };

            acc[item[0]] = pokemon;
            return acc;
        }, {});

        if (objID) {
            const updatedPokemon = updatedPokemons[objID];

            database.ref('pokemons/' + objID).set(updatedPokemon)
                .then(() => setPokemons(updatedPokemons));
        }
    }

    const addNewPokemon = () => {
        const allIds = Object.values(pokemons).map(pok => pok.id);
        const setIds = new Set(allIds);
        let id = 0;
        let exists = setIds.has(id);

        while (exists) {
            id += 1;
            exists = setIds.has(id);
        }

        const data = createTemplatePokemon(id);

        const newKey = database.ref().child('pokemons').push().key;
        database.ref('pokemons/' + newKey).set(data)
            .then(() => {
                const updatedPokemons = {...pokemons, [newKey]: data};
                setPokemons(updatedPokemons);
            });
    }

    return (
        <>
            <Layout id={4} title="Battlefield" desc="This is Description!" urlBg={bg3} >
                <div className={s.btn_wrap}>
                    <button className={s.add_btn}
                            onClick={addNewPokemon}>
                        Add pokemon
                    </button>
                </div>

                <div className={s.flex}>
                    { Object.entries(pokemons).map(([key, value]) =>
                        <PokemonCard key={key}
                                     name={value.name}
                                     img={value.img}
                                     id={value.id}
                                     type={value.type}
                                     values={value.values}
                                     isActiveCard={value.active}
                                     onCardClick={onCardClick}/>)
                    }
                </div>
            </Layout>
        </>
    );
}

export default GamePage;