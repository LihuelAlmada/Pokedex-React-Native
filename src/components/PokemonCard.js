import { Text, View, StyleSheet, Image, Pressable } from 'react-native'
import React, { Component } from 'react'
import getColorByPokemonType from '../utils/getColorByPokemonType'
import {capitalize} from 'lodash'

export default function PokemonCard (props) {
  const { pokemon } = props;
  console.log(props)
  const pokemonColor = getColorByPokemonType(pokemon.type)
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles}
  const goToPokemon = () => {
    console.log('vamos a', pokemon.name)
  }
    return (
      <Pressable
        onPress={goToPokemon}
      >
        <View style={styles.card}>
          <View style={styles.spacing}>
            <View style={bgStyles}>
              
          <Image source={{ uri: pokemon.image}} style={styles.image}/>
          <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
         
          {/* <Text>{pokemon.type}</Text> */}
          <Text style={styles.number}>#{`${pokemon.order}`.padStart(3,0)}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    )
  
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 120,
    width: 190,
    paddingTop: 5
  },
  spacing: {
    flex: 1,
    paddingLeft: 5,
  },
  bgStyles:{
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  image: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    color: '#fff',
    paddingTop: 10,
  },
  number: {
    position: 'absolute',
    top: 2,
    right: 2,
    color: '#fff',
  }
})