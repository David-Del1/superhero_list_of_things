import React from 'react';
import './CharacterSearch.scss';

const CharacterSearch = ({ handleChange }) => {
  return (
    <>
    <input
      className="CharacterSearch"
      type="text" 
      placeholder="Search"
      onChange={handleChange}
    />
    </>
  )
}

export default CharacterSearch
