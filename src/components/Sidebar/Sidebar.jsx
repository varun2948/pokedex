import React from 'react';
import PropTypes from 'prop-types';
import pad from '@src/utils/util';
import './sidebar.scss';

export default function Sidebar({ activeSidebar, selectedPokemonId }) {
  return (
    <div className={`sidebar ${!activeSidebar ? 'active-sidebar' : ''}`}>
      <h1>SideBar</h1>
      <div className="sidebar_container">
        <div className="sidebar_container_img">
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pad(selectedPokemonId, 3)}.png`}
            alt="pokemon"
          />
        </div>
        <div className="sidebar_container_details">
          <h4>
            Name : <span>Baulbasaur </span>
          </h4>
          <h4>
            Name : <span>Baulbasaur </span>
          </h4>
          <h4>
            Name : <span>Baulbasaur </span>
          </h4>
          <h4>
            Name : <span>Baulbasaur </span>
          </h4>
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  activeSidebar: PropTypes.string.isRequired,
  selectedPokemonId: PropTypes.number.isRequired,
};
