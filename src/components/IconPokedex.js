import React from 'react'
import { Image } from 'react-native'

export default function RenderPokedex() {
    return (
      <Image
        source={require("../assets/EpicaPokedex.png")}
        style={{ width: 75, height: 75, top: -7, borderRadius: 10 }}
      />
    );
  }

