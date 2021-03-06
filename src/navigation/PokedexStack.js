import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PokedexScreen from '../screens/Pokedex'
import PokemonScreen from '../screens/Pokemon';

const Stack = createNativeStackNavigator();
const PokedexStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="PokedexStack"
        component={PokedexScreen}
        options={{ title: "Pokedex", headerShown: false}}
      />
      <Stack.Screen 
        name="PokemonStack"
        component={PokemonScreen}
        options={ {
          title: "",
          headerShown: true,
          headerTransparent: true,
          headerShadowVisible: false
      } }
      />
    </Stack.Navigator>
  )
}

export default PokedexStack