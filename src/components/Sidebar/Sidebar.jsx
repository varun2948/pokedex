import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import pad from '@src/utils/util';
import './sidebar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '@Actions/pokemon';
// import normalizer from 'src/utils/normalizer';

// function pokemonNormalizer(key, value) {
//   return (data, item) => {
//     // eslint-disable-next-line no-param-reassign
//     data[item[key]] = item[value];
//     return data;
//   };
// }
/* eslint-disable no-param-reassign */
// eslint-disable-next-line no-unused-vars
function pokemonNormalizer(a, b) {
  console.log(a, 'a');
  console.log(b, 'b');
  return (data, item) => {
    console.log(item, 'item');
    if (item.chain) {
      data = { name: item.chain.species.name, evolves_to: item.chain.evolves_to.reduce(pokemonNormalizer(), {}) };
    } else if (item.evolves_to) {
      data = { name: item.species.name, evolves_to: item.evolves_to.reduce(pokemonNormalizer(), {}) };
    }
    return data;
  };
}

export default function Sidebar({ activeSidebar, selectedPokemonId }) {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { getSinglePokemonEvolutionRequest } = Creators;
  const [selectedPokemonData, setSelectedPokemonData] = useState([]);
  const pokemonData = useSelector((state) => state.pokemon.pokemon_data);
  const selectedPokemonEvolutionData = useSelector((state) => state.pokemon.evolutionData);
  useEffect(() => {
    const filterByName = pokemonData?.data?.filter((pokemon) => pokemon.id === selectedPokemonId);
    setSelectedPokemonData(filterByName);
    if (filterByName) {
      // console.log(filterByName[0].evolution_chain.url);
      // eslint-disable-next-line camelcase
      // const evolutionChainId = filterByName[0]?.evolution_chain?.url?.split('evolution-chain/');
      // dispatch(getSinglePokemonEvolutionRequest(evolutionChainId[1]));
    }
  }, [selectedPokemonId]);
  console.log(selectedPokemonEvolutionData);
  useEffect(() => {
    if (selectedPokemonEvolutionData) {
      const reducedData = [selectedPokemonEvolutionData]?.reduce(pokemonNormalizer(), {});
      console.log(reducedData, 'reduced');
    }
  }, [selectedPokemonEvolutionData]);
  // console.log(reducedData);
  return (
    <div className={`sidebar ${!activeSidebar ? 'active-sidebar' : ''}`}>
      <h1>SideBar</h1>
      {selectedPokemonData?.length > 0 && (
        <div className="sidebar_container">
          <div className="sidebar_container_img">
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pad(selectedPokemonId, 3)}.png`}
              alt="pokemon"
            />
          </div>
          <div className="sidebar_container_details">
            <h4>
              Name : <span>{selectedPokemonData[0].name} </span>
            </h4>
            <h4>
              Weight : <span>{selectedPokemonData[0].weight} </span>
            </h4>
            <h4>
              Height : <span>{selectedPokemonData[0].height} </span>
            </h4>
            <h4>
              Types : <span>{selectedPokemonData[0]?.types?.join(',')} </span>
            </h4>
            <h4>
              Habitat : <span>{selectedPokemonData[0]?.habitat.name} </span>
            </h4>
            <h4>
              Generation : <span>{selectedPokemonData[0]?.generation.name} </span>
            </h4>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="pokemon1" />
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png" alt="pokemon1" />
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png" alt="pokemon1" />
          </div>
        </div>
      )}
    </div>
  );
}

Sidebar.propTypes = {
  activeSidebar: PropTypes.string.isRequired,
  selectedPokemonId: PropTypes.number.isRequired,
};
