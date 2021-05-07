import React from 'react';
import './pokemonsearch.scss';
import PropTypes from 'prop-types';

export default function PokemonSearch({ value, onChange }) {
  return (
    <div className="search_pokemon">
      <input type="text" placeholder="Search Pokemon" onChange={onChange} value={value} />
    </div>
  );
}
PokemonSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
