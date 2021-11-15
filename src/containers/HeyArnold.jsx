import React, { useEffect, useState } from 'react';

const HeyArnold = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect( () => {
    async function fetchCharacters() {
      const api = await (await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')).json();

      const characters = await api.map(({ _id, name, image }) => ({ _id, name, image }));
      
      setCharacters(characters);
      setLoading(false);
    } 
    fetchCharacters();
  }, [])

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {characters.map(char => (
        <li key={char._id}>{char.name}</li>
      ))}
    </div>
  );
}

export default HeyArnold;
