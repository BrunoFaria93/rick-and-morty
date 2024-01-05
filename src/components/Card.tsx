import React from 'react';

interface CardProps {
  character: {
    image: string;
    name: string;
    species: string;
    gender: string;
    location: { name: string };
    origin: { name: string };
  };
}

export const Card: React.FC<CardProps> = ({ character }) => {
  return (
    <div className="flexHorizontal card">
      <img className="charImage" src={character?.image} alt={character?.name} />
      <div className="charInfo">
        <h3 className="titleColor">{character?.name}</h3>
        <span className="infoColor">
          {character?.species} - {character?.gender}{" "}
        </span>
        <div className="displayInline">
          <label>Location:</label>
          <span className="infoColor">{character?.location?.name}</span>
        </div>
        <div className="displayInline">
          <label>Origin:</label>
          <span className="infoColor">{character?.origin?.name}</span>
        </div>
      </div>
    </div>
  );
};
