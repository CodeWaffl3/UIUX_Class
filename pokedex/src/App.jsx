import { useState } from 'react';
import './App.css'
import PokeCard from './components/Pokecard/pokecard';
import PokeDetails from './components/Pokedetails/Pokedetails';

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const array = Array.from({length:20}, (_, index) => {
    return {name: "pikachu", id: index + 1}
  });
  console.log(selectedPokemon);

  return (
      <div className='App'>
        <ul id='pokeGrid'>
          {
            array.map((data, index) => (
              <PokeCard key={index} data={data} onClick={() => setSelectedPokemon(data.id)}/>)
          )}
        </ul>
        <PokeDetails/>
      </div>
    
  )
}

export default App
