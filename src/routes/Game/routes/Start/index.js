import {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import Layout from '../../../../components/Layout';
import PokemonCard from '../../../../components/PokemonCard';
import stl from './style.module.css';
import layoutBg from '../../bg3.jpg';
import database from '../../../../service/firebase';
import { PokemonContext } from '../../../../context/pokemonContext';

const StartPage = () => {
    const history = useHistory();
    const pokContext = useContext(PokemonContext);
    const [pokemons, setPokemons] = useState({});

    console.log('pokContext', pokContext);

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
                objID =	item[0];
                pokemon.isSelectedCard = !pokemon.isSelectedCard;
            };

            acc[item[0]] = pokemon;

            return acc;
        }, {});

        setPokemons(updatedPokemons);

        if (objID) {
            const updatedPokemon = updatedPokemons[objID];
            pokContext.addNewPokemon(updatedPokemon)
        }
    }

    const startGameBtn = () => {
        history.push('/game/board');
    }

    return (
        <Layout id='cards'
                title='Cards'
                colorTitle='#252934'
                urlBg={layoutBg}>

            <div className={stl.btn_wrap}>
                <button className={stl.start_btn}
                        onClick={startGameBtn}>
                    Start Game
                </button>
            </div>

            <div className={stl.flex}>
                { Object.entries(pokemons).map(([key, value]) =>
                    <PokemonCard key={key}
                                 name={value.name}
                                 img={value.img}
                                 id={value.id}
                                 type={value.type}
                                 values={value.values}
                                 isActiveCard={true}
                                 isSelectedCard={value.isSelectedCard}
                                 onCardClick={onCardClick}
                                 className={stl.cardSize}/>)
                }
            </div>
        </Layout>
    )
}

export default StartPage;