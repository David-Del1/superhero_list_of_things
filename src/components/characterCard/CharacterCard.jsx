import React, { useState } from 'react';
import './CharacterCard.scss';

const CharacterCard = ({ character }) => {
  const [showStats, setShowStats] = useState(false);

  return (
    <>
    <li className="CharacterCardDefault"
      onMouseEnter={() => setShowStats(true)}
      onMouseLeave={() => setShowStats(false)}
    >
      <div className={ showStats ? "characterImageStatsVisible" : "characterImageDefault"} style={{backgroundImage: `url(${character.images.md})`}}>
        <h2>
        {character.name}
        </h2>
      </div>
      <div 
        className={showStats ? "powerStatsVisible" : "powerStatsDefault"}>
        <p>
          <strong>Power:</strong>{' '}
          {character.powerstats.power}
        </p>
        <p>
          <strong>Intelligence:</strong>{' '}
          {character.powerstats.intelligence}
        </p>
        <p>
          <strong>Strength:</strong>{' '}
          {character.powerstats.strength}
        </p>
        <p>
          <strong>Speed:</strong>{' '}
          {character.powerstats.speed}
        </p>
        <p>
          <strong>Combat:</strong>{' '}
          {character.powerstats.combat}
        </p>
        <p>
          <strong>Durability:</strong>{' '}
          {character.powerstats.durability}
        </p>
      </div>
    </li>
    </>
  )
}

export default CharacterCard
