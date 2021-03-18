import Layout from "../../components/Layout";
import bg3 from "../Home/bg3.jpg";
import s from "../Home/style.module.css";
import pokemonsData from "../../pokemonsData.json";
import PokemonCard from "../../components/PokemonCard";
import {useHistory} from "react-router-dom";
import {useState} from 'react';


const GamePage = () => {

    const [pokemons, setPokemons] = useState(pokemonsData);

    const onCardClick = (id) => {
        setPokemons((pokemons) => {
            return pokemons.map(item => item.id === id ? ({...item, active: !item.active}) : item)
        })
    }

    return (
        <>
            <Layout id={4} title="Battlefield" desc="This is Description!" urlBg={bg3} >
                <div className={s.flex}>
                    {
                        pokemonsData.map(item =>
                            <PokemonCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                img={item.img}
                                type={item.type}
                                values={item.values}
                                onCardClick={onCardClick}
                                isActive={item.isActive}
                            />)
                    }
                </div>
            </Layout>
        </>
    );
}

export default GamePage;