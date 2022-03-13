import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import {user, userDetails} from '../../utils/userDB'

export default function LoginForm() {

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValues) => {
      console.log('formulario enviado');
      console.log( formValues);
      const { username, password} = formValues
      if (username !== user.username || password !== user.password) {
        console.log('eRROR en login')
      }else{
        console.log('entra al login papa')

      }
    }
  });
  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text)=> formik.setFieldValue('username', text)}
      />
      <Text style={styles.error}>{formik.errors.username}</Text>

      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text)=> formik.setFieldValue('password', text)}

      />
      <Text style={styles.error}>{formik.errors.password}</Text>

      <Button title="Enviar" onPress={formik.handleSubmit} />

    </View>
  );
}


function initialValues () {
  return{
    username: '',
    password: '',
  }
}
function validationSchema() {
  return {
    username: yup.string().required("El usuario es obligatorio"),
    password: yup.string().required("El Pass es obligatorio"),
  }
}
const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    marginTop: 20
  }
});
