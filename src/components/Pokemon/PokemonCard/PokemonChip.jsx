import React from 'react';
import PropTypes from 'prop-types';

const typeColor = (type) => {
  switch (type) {
    case 'grass':
      return '#9bcc50';
    case 'poison':
      return '#b97fc9';

    case 'fire':
      return '#f37c24';

    case 'flying':
      return '#4fc8ef';

    case 'water':
      return '#4592c4';

    case 'bug':
      return '#729f3e';

    case 'normal':
      return '#a4acaf';

    case 'electric':
      return '#eed535';

    case 'ground':
      return '#ab9841';

    case 'fairy':
      return '#f9b9ea';

    case 'fighting':
      return '#d56723';

    case 'psychic':
      return '#f366b9';

    case 'rock':
      return '#a38c21';

    case 'ice':
      return '#51c4e7';

    case 'steel':
      return '#9eb8b8';

    case 'ghost':
      return '#7b62a3';

    case 'dragon':
      return '#f16e57';

    case 'dark':
      return '#707070';

    default:
      return '#659eb0';
  }
};
// eslint-disable-next-line no-unused-vars
export default function PokemonChip({ chipName, chipColor }) {
  return (
    // <div className="chips">
    <div className="pokemon-type-chip" style={{ backgroundColor: typeColor(chipName) }}>
      {chipName}
    </div>
    // </div>
  );
}
PokemonChip.propTypes = {
  chipName: PropTypes.string.isRequired,
  chipColor: PropTypes.string,
};
PokemonChip.defaultProps = {
  chipColor: '#659eb0',
};
