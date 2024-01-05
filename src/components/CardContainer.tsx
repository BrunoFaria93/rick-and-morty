import React from 'react';
import { Card } from './Card';
import { useRickAndMorty } from '../context/RickAndMortyContext';

export const CardContainer: React.FC = () => {
  const { characters } = useRickAndMorty();

  return (
    <div className="cardsContainer">
      <ul className="list">
        {characters?.map((character) => (
          <li className="listItem" key={character.id}>
            <Card character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
};
