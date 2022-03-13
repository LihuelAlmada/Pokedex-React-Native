import { View, Text, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import {getPokemonDetailsApi} from '../api/pokemon'
import Header from '../components/Pokemon/Header';

const PokemonScreen = (props) => {
  const {
    navigation, route: {params}
  } = props;
  const [pokemon, setPokemon] = useState(null);
  useEffect(()=>{
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        
        setPokemon(response)
      } catch(error) {
        navigation.goBack();
      }
    })()
  }, [params])

  if (!pokemon) return null;
  return (
    <ScrollView>
      <Header name={pokemon.name} order={pokemon.order} image={pokemon.sprites.other['official-artwork'].front_default} type={pokemon.types[0].type.name}/>
      <Text>Esto es un {pokemon.id}</Text>
      <Text>{pokemon.name}</Text>
    </ScrollView>
  );
};

export default PokemonScreen;
