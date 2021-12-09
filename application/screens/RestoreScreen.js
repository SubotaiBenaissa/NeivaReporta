import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

function RestoreScreen() {
  return (
    <SafeAreaView>
      <Formik
        initialValues={{ email: "", emailConfirm: "" }}
        validationSchema={yup.object().shape({
          email: yup.string().email(),
          emailConfirm: yup.string().email().required("email es requerido"),
        })}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(values);
        }}
      >
        {(props) => (
          <ImageBackground
            source={require("../assets/monumentoInicio.jpg")}
            style={styles.fondoImagen}
          >
            <View style={styles.contenedor}>
              <Text style={styles.tituloTexto}>
                Recuperación de {"\n"}cuenta
              </Text>
              <Text style={styles.tituloTexto}>________________</Text>
              <View>
                <Text style={styles.indicesTexto}>Correo electrónico</Text>
                <TextInput
                  style={styles.textoEntrada}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                />
                <Text>{props.errors.email}</Text>
                <Text style={styles.indicesTexto}>Confirmar correo</Text>
                <TextInput
                  style={styles.textoEntrada}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  onChangeText={props.handleChange("emailConfirm")}
                  value={props.values.emailConfirm}
                />
                <Text>{props.errors.emailConfirm}</Text>
                <TouchableOpacity
                  style={styles.botonConfirmar}
                  onPress={props.handleSubmit}
                >
                  <Text style={styles.textoBotonConfirmar}>E N V I A R</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    justifyContent: "center",
    alignItems: "center",
  },
  fondoImagen: {
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  tituloTexto: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  indicesTexto: {
    color: "#fff",
    fontSize: 25,
    textAlign: "left",
    margin: 5,
  },
  textoEntrada: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 280,
    height: 60,
    margin: 5,
    fontSize: 20,
    textAlign: "center",
  },
  botonConfirmar: {
    alignItems: "center",
    borderRadius: 35,
    backgroundColor: "#99F98D",
    margin: 20,
    width: 250,
    height: 70,
    justifyContent: "center",
  },
  textoBotonConfirmar: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5,
  },
});

export default RestoreScreen;
