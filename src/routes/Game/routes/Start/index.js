import {useState, useEffect, useContext} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';
import Layout from '../../../../components/Layout';
import PokemonCard from '../../../../components/PokemonCard';
import stl from './style.module.css';
import cn from 'classnames'
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
            <div className={stl.flex}>
                <button onClick={handleStartGameClick}
                        className={cn(stl.buttonContainern, stl.container)}
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
                                 isActive={true}
                                 uuid={key}
                                 isSelected={value.isSelected}
                                 onCardClick={() => {
                                     if (Object.keys(pokemonsContext.pokemons).length < 5 || value.isSelected) {
                                         handleChangeSelected(key);
                                     }
                                 }}
                                 minimize={false}
                                 className={stl.card} />)
                }
            </div>
        </>
    )
}

export default StartPage;