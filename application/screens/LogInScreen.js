import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

function LogInScreen({ navigation }) {
  const presionarOlvidar = () => {
    navigation.navigate("Restore");
  };

  return (
    <SafeAreaView style={styles.vistaPrincipal}>
      <ImageBackground
        source={require("../assets/monumentoInicio.jpg")}
        style={styles.image}
      >
        <Formik
          initialValues={{ email: "", contra: "" }}
          validationSchema={yup.object().shape({
            email: yup.string().email().required(),
            contra: yup.string().required(),
          })}
          onSubmit={(values, actions) => {
            actions.resetForm();
            console.log(values);
            navigation.navigate("User", {
              email: values.email,
              contra: values.contra,
            });
          }}
        >
          {(props) => (
            <View style={styles.vistaPrincipal}>
              <Text style={styles.textoTop}>
                Inicia sesión en tu {"\n"} cuenta
              </Text>
              <Text style={styles.textoTop}>___________________</Text>

              <View>
                <Text style={styles.textotitulos}> Correo Electrónico </Text>
                <TextInput
                  style={styles.inputTexto}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                />
                <Text>{props.errors.email}</Text>
                <Text style={styles.textotitulos}> Contraseña</Text>
                <TextInput
                  style={styles.inputTexto}
                  secureTextEntry
                  onChangeText={props.handleChange("contra")}
                  value={props.values.contra}
                />
                <Text>{props.errors.contra}</Text>
                <TouchableOpacity
                  style={styles.botonIniciar}
                  onPress={props.handleSubmit}
                >
                  <Text style={styles.textoTop}>I N I C I A R</Text>
                </TouchableOpacity>
                <TouchableNativeFeedback onPress={presionarOlvidar}>
                  <Text style={styles.textoFoot}>
                    ¿Olvidaste tu contraseña?
                  </Text>
                </TouchableNativeFeedback>
              </View>
            </View>
          )}
        </Formik>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  vistaPrincipal: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  textoTop: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5,
  },
  textotitulos: {
    color: "#fff",
    fontSize: 25,
    textAlign: "left",
  },
  inputTexto: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 270,
    height: 60,
    margin: 10,
    fontSize: 20,
    textAlign: "center",
  },
  botonIniciar: {
    alignItems: "center",
    borderRadius: 35,
    backgroundColor: "#99F98D",
    margin: 20,
    width: 250,
    height: 70,
    justifyContent: "center",
  },
  textoFoot: {
    fontSize: 25,
    textAlign: "center",
    color: "#fff",
  },
});

export default LogInScreen;
