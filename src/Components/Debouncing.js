import React, {useState,useEffect} from 'react';
import useDebounce from '../hooks/useDebouncing';

function App() {
  const [searchTerm,setSearchTerm] = useState('');
  const [data,setData] = useState([]);
  const debouceSearchTerm = useDebounce(searchTerm, 300);
  useEffect(() => {
    if(debouceSearchTerm) {
      fetchPokemon(debouceSearchTerm);
    }else {
      console.log('Something else')
    }
  },[debouceSearchTerm]) 

  const fetchPokemon = (pokemonName) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
   
    .then((response) => {
      console.log('Reponse', response);
      setData(response)
    })
  }
  return (
    <div className="App">

      <input 
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        placeholder="Serach pokemon..."
      />
      {data ? (
        <div>
         <h1> {data.name}</h1>
          </div>
      ) : <h1>No  Data</h1>}
    </div>
  );
}

export default App;
