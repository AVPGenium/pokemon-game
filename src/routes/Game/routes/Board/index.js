import {useContext} from 'react';
import { PokemonContext } from '../../../../context/pokemonContext';
import PokemonCard from '../../../../components/PokemonCard';
import stl from './style.module.css';

const BoardPage = () => {
    const {pokemons} = useContext(PokemonContext);

    return (
        <div className={stl.root}>
            <div className={stl.playerOne}>
                { pokemons.map(({id, name, img, type, isSelectedCard, values}) => {
                    return (
                        <PokemonCard key={id}
                                     name={name}
                                     img={img}
                                     id={id}
                                     type={type}
                                     values={values}
                                     minimize
                                     isActiveCard
                                     isSelectedCard={isSelectedCard}
                        />
                    )
                })
                }
            </div>

            <div className={stl.board}>
                <div className={stl.boardPlate}>1</div>
                <div className={stl.boardPlate}>2</div>
                <div className={stl.boardPlate}>3</div>
                <div className={stl.boardPlate}>4</div>
                <div className={stl.boardPlate}>5</div>
                <div className={stl.boardPlate}>6</div>
                <div className={stl.boardPlate}>7</div>
                <div className={stl.boardPlate}>8</div>
                <div className={stl.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;