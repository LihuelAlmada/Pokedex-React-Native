import { View, Text, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import {getPokemonDetailsApi} from '../api/pokemon'
import Header from '../components/Pokemon/Header';
import Types from '../components/Pokemon/Types'
import Stats from '../components/Pokemon/Stats'
import {
  AntDesign,
  FontAwesome
} from "@expo/vector-icons";
const PokemonScreen = (props) => {
  const {
    navigation, route: {params}
  } = props;
  const [pokemon, setPokemon] = useState(null);
  useEffect(()=>{
     navigation.setOptions({
       headerRight: () => <FontAwesome name="heart" size={24} color='white' />,
       headerLeft: () => <AntDesign name="arrowleft" size={24} color="white" onPress={navigation.goBack}/>
     })
  }, [navigation, params])
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
      <Types types={pokemon.types}/>
      <Stats stats={pokemon.stats}/>
    </ScrollView>
  );
};

export default PokemonScreen;
