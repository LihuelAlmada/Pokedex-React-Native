import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AccountScreen from '../screens/Account'

const Stack = createNativeStackNavigator();
const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="AccountStack"
        component={AccountScreen}
        options={{ title: "My Account"}}
      />
    </Stack.Navigator>
  )
}

export default AccountStack

