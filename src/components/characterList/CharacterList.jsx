import React from 'react';
import CharacterCard from '../characterCard/CharacterCard';

const CharacterList = ({ characters }) => {

  return (
    <ul className="SuperHeroContainer">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
        </ul>
  )
}

export default CharacterList
