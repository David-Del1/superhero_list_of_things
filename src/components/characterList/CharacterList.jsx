import React from 'react';
import CharacterCard from '../characterCard/CharacterCard';
import './CharacterList.scss';

const CharacterList = ({ characters, indexOfFirstCharacter, indexOfLastCharacter }) => {

  return (
    <ul className="CharacterList">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      )).slice(indexOfFirstCharacter, indexOfLastCharacter )}
        </ul>
  )
}

export default CharacterList
