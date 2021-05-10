/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './pokemoncard.scss';
import pad from '../../../utils/util';
import PokemonChip from './PokemonChip';

export default function PokemonCard({ name, id, types, activeSidebar, setActiveSidebar, setSelectedPokemonId }) {
  return (
    <div
      key={name}
      className="pokemon-card flip-card"
      role="button"
      tabIndex="0"
      onClick={() => {
        setActiveSidebar(!activeSidebar);
        setSelectedPokemonId(id);
      }}
      onKeyDown={() => {
        setActiveSidebar(!activeSidebar);
        setSelectedPokemonId(id);
      }}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h4>{name}</h4>
          <img
            className="pokemon-img"
            alt={name}
            // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pad(id, 3)}.png`}
          />
          <div className="chips">
            {types?.map((type) => (
              <PokemonChip chipName={type} />
            ))}
          </div>
        </div>
        <div className="flip-card-back">
          <h4>{name}</h4>
          <img
            className="pokemon-img"
            alt={name}
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pad(id, 3)}.png`}
          />
        </div>
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  types: PropTypes.array.isRequired,
  activeSidebar: PropTypes.bool,
  setActiveSidebar: PropTypes.func,
  setSelectedPokemonId: PropTypes.func,
};
PokemonCard.defaultProps = {
  activeSidebar: false,
  setActiveSidebar: () => {},
  setSelectedPokemonId: () => {},
};
