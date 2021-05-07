import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '@Actions/pokemon';
import PokemonCard from '@Components/Pokemon/PokemonCard/PokemonCard';
import PokemonSearch from '@Components/PokemonSearch/PokemonSearch';

export default function Pokemon() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const { getAllPokemonRequest } = Creators;
  const pokemonData = useSelector((state) => state.pokemon.pokemon_data);
  useEffect(() => {
    dispatch(getAllPokemonRequest(0, 100));
  }, []);
  useEffect(() => {
    setFilteredData(pokemonData.data);
  }, [pokemonData]);
  useEffect(() => {
    // consol
    if (searchText !== '') {
      console.log(pokemonData, 'pokemon_data');
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
      <div className="pokemon_container">
        {filteredData?.map((pokemon) => (
          <PokemonCard name={pokemon.name} id={pokemon.id} />
        ))}
      </div>
    </div>
  );
}
