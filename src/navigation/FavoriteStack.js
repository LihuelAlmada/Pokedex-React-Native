import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FavoriteScreen from '../screens/Favorite'

const Stack = createNativeStackNavigator();
const FavoriteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="FavoriteStack"
        component={FavoriteScreen}
        options={{ title: "FavoritesStack"}}
      />
    </Stack.Navigator>
  )
}

export default FavoriteStack