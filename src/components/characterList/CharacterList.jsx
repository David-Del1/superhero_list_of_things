import React from 'react';
import CharacterCard from '../characterCard/CharacterCard';

const CharacterList = ({ characters, indexOfFirstCharacter, indexOfLastCharacter }) => {

  return (
    <ul className="SuperHeroContainer">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      )).slice(indexOfFirstCharacter, indexOfLastCharacter )}
        </ul>
  )
}

export default CharacterList
