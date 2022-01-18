import './App.css';
import { useState } from 'react';



function App() {

  ///// set pokemon initial useState to an empty array \\\\\
  const [pokemon, setPokemon] = useState([])

  const catchPokemon = () => {
    ///// set limit to 100 pokemon, based on API documentation \\\\\
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=100")
      ///// success(any variable) to be parsed by JSON \\\\\
      .then(success => {
        ///// returns data parsed by JSON to above variable \\\\\
        return success.json()
      })
      .then(jsonResult => {
        ///// console log API parsed by JSON (optional) \\\\\
        console.log(jsonResult);
        ///// set pokemon to API parsed by JSON - .results is part of Pokemon API \\\\\ 
        setPokemon(jsonResult.results)
      })
      ///// console log if error retrieving API \\\\\
      .catch(error => console.log(error))
  }

  console.log(pokemon)

  return (
    <div className="App mt-5">
      <h1>Pokémon</h1>
      <hr />
      <button onClick={catchPokemon} className="m-3 btn btn-danger btn-lg">Catch 'Em All!</button>
      <div>
        {/* {JSON.stringify(pokemon)} */}
        {pokemon.map((pkmn, index) => {
          return (<h4 key={index}>{pkmn.name}</h4>)
        })}
      </div>
    </div>
  );
}

export default App;
