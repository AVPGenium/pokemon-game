import {useState, useEffect, useContext} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';
import Layout from '../../../../components/Layout';
import PokemonCard from '../../../../components/PokemonCard';
import stl from './style.module.css';
import layoutBg from '../../bg3.jpg';
import { PokemonContext } from '../../../../context/pokemonContext';
import { FireBaseContext } from '../../../../context/fireBaseContext';

const StartPage = () => {
    const firebase = useContext(FireBaseContext)
    const pokemonsContext = useContext(PokemonContext);
    const [pokemons, setPokemons] = useState({})

    useEffect(() => {
        firebase.getPokemonSocket((pokemons) => {
            setPokemons(pokemons);
        });
        return () => firebase.ofPokemonSocket();
    }, []);

    const handleChangeSelected = (key) => {
        const pokemon = {...pokemons[key]};
        pokemonsContext.onSelectedPokemons(key, pokemon);

        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected
            }
        }))
    }


    const history = useHistory();

    const handleStartGameClick = () => {
        history.push('/game/board')
    }

    return (
        <>
            <div className={stl.btn_wrap}>
                <button onClick={handleStartGameClick}
                disabled={Object.keys(pokemonsContext.pokemons).length < 5}>
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
                                 onCardClick={() => {
                                     if (Object.keys(pokemonsContext.pokemons).length < 5 || value.isSelectedCard) {
                                         handleChangeSelected(key);
                                     }
                                 }}
                                 className={stl.card} />)
                }
            </div>
        </>
    )
}

export default StartPage;