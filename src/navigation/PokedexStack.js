import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PokedexScreen from '../screens/Pokedex'

const Stack = createNativeStackNavigator();
const PokedexStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Pokedex"
        component={PokedexScreen}
        options={{ title: "Pokedex"}}
      />
    </Stack.Navigator>
  )
}

export default PokedexStack