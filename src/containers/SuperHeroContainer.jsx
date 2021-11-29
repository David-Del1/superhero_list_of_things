import React, { useEffect, useState } from 'react';
import CharacterList from '../components/characterList/CharacterList';
import Pagination from '../components/pagination/Pagination';
import CharacterSearch from '../components/search/CharacterSearch';

import './SuperHeroContainer.scss';

const URL = "https://akabab.github.io/superhero-api/api/all.json";

const SuperHeroContainer = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(20);



  useEffect( () => {
    async function fetchCharacters() {
      const api = await (await fetch(URL)).json()
      const charactersList = await api.map(({id, name, slug, powerstats, appearance, work, images}) => ({ id, name, slug, powerstats, appearance, work, images }));
      setCharacters(charactersList);
      setLoading(false);
    } 
    fetchCharacters();
  }, []);

  // function DisableScroll() {
  //   useEffect(() => {
  //     window.scrollTo(0, 10000);
  //   }, []);

  //   return null;
  // }

  // Get current characters
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // console.log(currentPage);

  const filteredCharacters = characters.filter(hero => hero.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <>
      {loading && <h1>Loading...</h1>}
      <div className="SuperHeroContainer">
        <CharacterSearch 
          handleChange={e => setSearchField(e.target.value)}
        />
        <CharacterList characters={filteredCharacters} indexOfFirstCharacter={indexOfFirstCharacter} indexOfLastCharacter={indexOfLastCharacter} />
      <Pagination charactersPerPage={charactersPerPage} totalCharacters={characters.length} paginate={paginate} currentPage={currentPage} />
      {/* <DisableScroll /> */}
      </div>
    </>
  );
}

export default SuperHeroContainer;
