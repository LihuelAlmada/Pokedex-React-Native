import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from '../components/PokemonList'
export default function PokedexScreen() {
  const [pokemons, setPokemons] = useState([]);
  //console.log("-------------- Pokemong ----------", pokemons);
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      //console.log(response)
      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        //console.log('pokemonDetails', pokemonDetails);

        pokemonsArray.push({
        	id: pokemonDetails.id,
        	name: pokemonDetails.name,
        	type: pokemonDetails.types[0].type.name,
        	order: pokemonDetails.order,
        	//image: pokemonDetails.sprites.other['generation-v'].black_wite.animated.front_default
        	image: pokemonDetails.sprites.other['official-artwork'].front_default
        })
      }
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <PokemonList pokemons={pokemons}/>
    </View>
  );
}
