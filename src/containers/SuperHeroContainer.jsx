import React, { useEffect, useState } from 'react';
import CharacterCard from '../components/CharacterCard';

import './SuperHeroContainer.scss';

const URL = "https://akabab.github.io/superhero-api/api/all.json";

const SuperHeroContainer = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect( () => {
    async function fetchCharacters() {
      const api = await (await fetch(URL)).json()
      const charactersList = await api.map(({id, name, slug, powerstats, appearance, work, images}) => ({ id, name, slug, powerstats, appearance, work, images }));
      setCharacters(charactersList);
      setLoading(false);
    } 
    fetchCharacters();
  }, []);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      <ul className="SuperHeroContainer">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    </>
  );
}

export default SuperHeroContainer;
