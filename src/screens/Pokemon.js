import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';
import {getPokemonDetailsApi} from '../api/pokemon'

const PokemonScreen = (props) => {
  const {
    navigation, route: {params}
  } = props;
  const [pokemon, setPokemon] = useState(null);
  useEffect(()=>{
    (async () => {
      try {
        const response = await get
      } catch(error) {
        navigation.goBack();
      }
    })()
  })

  if (!pokemon) return null;
  return (
    <View>
      <Text>Esto es un {pokemon}</Text>
    </View>
  );
};

export default PokemonScreen;
