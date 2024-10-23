import React from 'react';
import CharacterCard from "./characterCard";

const CharacterList = ({ characters }) => {
    return (
      <div className="container">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    );
};

export default CharacterList;