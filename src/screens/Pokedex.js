import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";

export default function PokedexScreen() {

	const [pokemons, setPokemons] = useState([])
	console.log("-------------- Pokemong ----------", pokemons)
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();

      const pokemonsArray = [];
			for await (pokemon of response.result) {
				
				const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
				
				pokemonsArray.push({
					id: pokemonDetails.id,
					name: pokemonDetails.name,
					type: pokemonDetails.types[0].type.name,
					order: pokemonDetails.order,
					//imagen: pokemonDetails.sprites.other['generation-v'].black_wite.animated.front_default
					imagen: pokemonDetails.sprites.other['official-artwork'].front_default
				})
				setPokemons([...pokemons, ...pokemonsArray]);
			}
      //console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <View>
      <Text>Pokedex</Text>
    </View>
  );
}
