import * as React from 'react';

const PokemonList = ({ pokemonList }: any) => (
  <div>
    {pokemonList.map((pokemon: any) => (
      <div key={pokemon.name}>{pokemon.name}</div>
    ))}
  </div>
);

export default PokemonList;
