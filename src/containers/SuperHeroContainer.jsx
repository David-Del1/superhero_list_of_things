import React, { useEffect, useState } from 'react';
import CharacterList from '../components/characterList/CharacterList';
import CharacterSearch from '../components/search/CharacterSearch';

import './SuperHeroContainer.scss';

const URL = "https://akabab.github.io/superhero-api/api/all.json";

const SuperHeroContainer = ({ superHeros }) => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [searchField, setSearchField] = useState('');



  useEffect( () => {
    async function fetchCharacters() {
      const api = await (await fetch(URL)).json()
      const charactersList = await api.map(({id, name, slug, powerstats, appearance, work, images}) => ({ id, name, slug, powerstats, appearance, work, images }));
      setCharacters(charactersList);
      setLoading(false);
    } 
    fetchCharacters();
  }, []);

  const filteredCharacters = characters.filter(hero => hero.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <>
      {loading && <h1>Loading...</h1>}
      <div className="SuperHeroContainer">
        <h1>Hero Rolodex</h1>
        <CharacterSearch 
          handleChange={e => setSearchField(e.target.value)}
        />
        <CharacterList characters={filteredCharacters} />
      </div>
    </>
  );
}

export default SuperHeroContainer;
