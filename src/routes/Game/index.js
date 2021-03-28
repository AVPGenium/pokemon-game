import {useState, useEffect} from 'react';
import {useRouteMatch, Route, Switch, Redirect} from 'react-router-dom';
import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';
import { PokemonContext, Player2Context } from '../../context/pokemonContext';

const GamePage = () => {
    const [pokemons, setSelectedPokemons] = useState({});
    const [pokemons2, setSelectedPokemons2] = useState([])
    const  match  =  useRouteMatch ( '/game' )

    const setPokemonsPlayer2 = (pokemon2) => {
        setSelectedPokemons2(() => {
            return [...pokemon2]
        })
    }
    const dischargeContext2 = () => {
        setSelectedPokemons2([])
    }
    const dischargeContext = () => {
        setSelectedPokemons({});

    }

    const handleSelectedPokemons = (key, pokemon) => {
        setSelectedPokemons(prevState => {
            if (prevState[key]) {
                const copyState = {...prevState};
                delete copyState[key];
                return copyState;
            }
            return {
                ...prevState,
                [key]: pokemon
            }
        })
    }
    return (
        <Player2Context.Provider value={{
            pokemons2: pokemons2,
            setPokemonsPlayer2: setPokemonsPlayer2,
            dischargeContext2:dischargeContext2,
        }} >
        <PokemonContext.Provider value={
            {
                pokemons: pokemons,
                onSelectedPokemons: handleSelectedPokemons,
                dischargeContext: dischargeContext
            }
        }>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
                <Route render={() => <Redirect to='/404'/>}/>
            </Switch>
        </PokemonContext.Provider>
        </Player2Context.Provider>
    );
}

export default GamePage;