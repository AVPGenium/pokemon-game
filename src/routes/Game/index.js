import {useState} from 'react';
import {useRouteMatch, Route, Switch, Redirect} from 'react-router-dom';
import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';
import { PokemonContext } from '../../context/pokemonContext';

const GamePage = () => {
    const match = useRouteMatch();
    const [pokemons, setSelected] = useState([])

    const selectPokemon = (val) => {
        setSelected(val);

    };

    return (
        <PokemonContext.Provider value={
            {
                pokemons,
                selectPokemon: selectPokemon
            }
        }>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
                <Route render={() => <Redirect to='/404'/>}/>
            </Switch>
        </PokemonContext.Provider>
    );
}

export default GamePage;