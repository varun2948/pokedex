import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '@Actions/pokemon';
import PokemonCard from '@Components/Pokemon/PokemonCard/PokemonCard';
import PokemonSearch from '@Components/PokemonSearch/PokemonSearch';
import Sidebar from '@Components/Sidebar/Sidebar';

export default function Pokemon() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);
  const { getAllPokemonRequest } = Creators;
  const pokemonData = useSelector((state) => state.pokemon.pokemon_data);
  useEffect(() => {
    dispatch(getAllPokemonRequest(0, 389));
  }, []);
  useEffect(() => {
    setFilteredData(pokemonData.data);
  }, [pokemonData]);
  useEffect(() => {
    if (searchText !== '') {
      const filterByName = pokemonData?.data?.filter((pokemon) => pokemon.name.includes(searchText));
      setFilteredData(filterByName?.length > 0 ? filterByName : pokemonData);
    } else {
      setFilteredData(pokemonData.data);
    }
  }, [searchText]);
  return (
    <div>
      <h1>Pokemon</h1>
      <PokemonSearch value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      <section className="pokemon_section">
        <div className={`pokemon_container ${!activeSidebar ? 'active-sidebar' : ''} `}>
          {filteredData?.map((pokemon) => (
            <PokemonCard
              name={pokemon.name}
              id={pokemon.id}
              types={pokemon.types}
              activeSidebar={activeSidebar}
              setSelectedPokemonId={setSelectedPokemonId}
              setActiveSidebar={setActiveSidebar}
            />
          ))}
        </div>
        <Sidebar activeSidebar={activeSidebar} selectedPokemonId={selectedPokemonId} />
      </section>
    </div>
  );
}
