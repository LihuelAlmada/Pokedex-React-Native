import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import IconPokedex from '../components/IconPokedex'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PokedexStack from "./PokedexStack"
import AccountStack from "./AccountStack"
import FavoriteStack from "./FavoriteStack"
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
        initialRouteName="PokedexTab"
        screenOptions={{
          tabBarActiveTintColor: "#EF3E33",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#000",
          },
        }}
      >
        <Tab.Screen
          name="FavoriteTab"
          component={FavoriteStack}
          options={{
            tabBarLabel: "FavoritesTab",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="heart" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="PokedexTab"
          component={PokedexStack}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => <IconPokedex />,
          }}
        />
        <Tab.Screen
          name="AccountTab"
          component={AccountStack}
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

