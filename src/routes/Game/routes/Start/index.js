import {useState, useEffect, useContext} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';
import Layout from '../../../../components/Layout';
import PokemonCard from '../../../../components/PokemonCard';
import stl from './style.module.css';
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux';
import { selectPokemonsdata, selectPokemonsLoding, getPokemonsAsync } from '../../../../store/pokemon';
import layoutBg from '../../bg3.jpg';
import { PokemonContext } from '../../../../context/pokemonContext';
import { FireBaseContext } from '../../../../context/fireBaseContext';

const StartPage = () => {
    const pokemonsContext = useContext(PokemonContext);
    const history = useHistory();
    const isLoding = useSelector(selectPokemonsLoding);
    const pokemonsRedux = useSelector(selectPokemonsdata);
    const dispatch = useDispatch();

    console.log('####: pokemonsRedux', pokemonsRedux);

    const [pokemons, setPokemons] = useState({})

    useEffect(() => {
        dispatch(getPokemonsAsync());
        pokemonsContext.dischargeContext();
    }, []);

    useEffect(() => {
        setPokemons(pokemonsRedux);
    }, [pokemonsRedux]);

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

    const handleStartGameClick = () => {
        history.push('/game/board')
    }

    const playerOneLengthState = Object.keys(pokemonsContext.pokemons).length;

    return (
        <>
            <div className={stl.flex}>
                <button onClick={handleStartGameClick}
                        className={cn(stl.buttonContainern, stl.container)}
                disabled={Object.keys(pokemonsContext.pokemons).length < 5}>
                    {playerOneLengthState < 5 ? `Chose ${5 - playerOneLengthState} pokemons!` : `Let's play!`}
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