import React from 'react';
import PropTypes from 'prop-types';
import './pokemoncard.scss';

export default function PokemonCard({ name, id }) {
  return (
    <div key={name} className="pokemon-card flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h4>{name}</h4>
          <img
            className="pokemon-img"
            alt={name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          />
        </div>
        <div className="flip-card-back">
          <h4>{name}</h4>
          <img
            className="pokemon-img"
            alt={name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          />
        </div>
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
