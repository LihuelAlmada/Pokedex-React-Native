import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import IconPokedex from '../components/IconPokedex'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/Account";
import FavoriteScreen from "../screens/Favorite";
import PokedexScreen from "../screens/Pokedex";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { render } from "react-dom";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Pokedex"
        screenOptions={{
          tabBarActiveTintColor: "#EF3E33",
          headerShown: true,
          tabBarStyle: {
            backgroundColor: "#000",
          },
        }}
      >
        <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            tabBarLabel: "Favorites",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="heart" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Pokedex"
          component={PokedexScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => <IconPokedex />,
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: "My Account",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

