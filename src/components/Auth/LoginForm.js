import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

export default function LoginForm() {
  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput placeholder="Usuario"
        style={styles.input}
        autoCapitalize='none'
      />
      <TextInput placeholder="Contraseña"
        style={styles.input}
        secureTextEntry={true}
      />
      <Button title="Enviar" onPress={() => console.log('Enviar')} />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  }

})