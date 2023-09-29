import { useEffect, useState } from 'react';
import './App.css'
import PokeCard from './components/Pokecard/pokecard';
import PokeDetails from './components/Pokedetails/Pokedetails';

function App() {

  const [loadPokedata, setLoadPokedata] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [nextPokedata, setNextPokedata] = useState("");

  const [pokemons, setPokemons] = useState([]);


  const getPokeData = async () =>{
    const res = await fetch(loadPokedata);
    const data = await res.json();
    setNextPokedata(data.next);

    const results = data.results;

    let finished = 0;
    
    results.forEach((pokemon, index) => {
      fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon.name)
        .then(response => {
          response.json()
            .then(pokeJson => {
              results[index] = pokeJson;
              finished += 1;
            });
        });
    });

    while(finished < results.length){
      await new Promise(r=> setTimeout(r, 10));
    }
    setPokemons([...pokemons, ...results]);
    console.log("Finished Loading");
  }

  useEffect(() =>{
    getPokeData();
  }, [loadPokedata]);

  

  console.log(selectedPokemon);

  return (
      <div className='App'>
        <ul id='pokeGrid'>
          {
            pokemons.map((data, index) => (
              <PokeCard key={index} data={data} onClick={() => setSelectedPokemon(index)}/>)
          )
          }
          <li className='pokeCard'>
            <div className='whiteCover' onClick={() => setLoadPokedata(nextPokedata)}>
              Next 20
            </div>
          </li>
        </ul>
        {pokemons.length > 0 && <PokeDetails pokemon={pokemons[selectedPokemon]}/>}
      </div>
    
  )
}

export default App
