import React from 'react';

const CharacterCard = ({ character }) => {
    const { image, name, status } = character;
    const statusColor =
      status === 'Alive' ? 'limegreen' : status === 'Dead' ? 'red' : 'gray';
  
    return (
      <div className="character">
        <img src={image} alt={name} />
        <p className="name">{name}</p>
        <p className="alive" style={{ color: statusColor }}>
          {status}
        </p>
      </div>
    );
};

export default CharacterCard;