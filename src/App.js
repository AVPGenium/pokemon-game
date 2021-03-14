import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import "./App.css"

import bg1 from "./bg1.jpg"
import bg3 from "./bg3.jpg"

import pokemonsData from './pokemonsData.json';
import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <>
      <Header title="Pokemon Game" desc="Simple game created with React for React Maraphon"/>
      <Layout id={2} title="Game description" desc="This is Description!" urlBg={bg1} >
        <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
        <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
      </Layout>
      <Layout id={3} title="Game description" desc="This is Description!" colorBg="red">
          <p>
              To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color.
              To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared.
              If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color.
              If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
          </p>
      </Layout>
      <Layout id={4} title="Battlefield" desc="This is Description!" urlBg={bg3} >
        <div className="flex">
            {
                pokemonsData.map(item => <PokemonCard key={item.id} id={item.id} name={item.name} img={item.img} type={item.type} values={item.values}/>)
            }
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
