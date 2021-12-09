import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

function UserEditScreen({ navigation }) {
  const identidad = navigation.getParam("identidad", "no identidad");
  const nombre = navigation.getParam("nombre", "Anónimo");
  const email = navigation.getParam("email");
  const contra = navigation.getParam("contra");

  const presionarCancelar = () => {
    navigation.navigate("User");
  };

  return (
    <SafeAreaView>
      <Formik
        initialValues={{
          identidadEdit: identidad,
          nombreEdit: nombre,
          emailEdit: email,
          contraEdit: contra,
          contraEditConf: "",
        }}
        validationSchema={yup.object().shape({
          identidadEdit: yup.string().required("identidad requerida"),
          nombreEdit: yup.string().required("nombre es requerido"),
          emailEdit: yup.string().email().required("email es requerido"),
          contraEdit: yup.string().required("contraseña requerida"),
        })}
        onSubmit={(values, action) => {
          console.log(values);
          action.resetForm();
          navigation.navigate("User", {
            identidad: values.identidadEdit,
            nombre: values.nombreEdit,
            email: values.emailEdit,
            contra: values.contraEditConf,
            contraEditConf: values.contraEditConf,
          });
        }}
      >
        {(props) => (
          <ImageBackground
            source={require("../assets/monumentoInicio.jpg")}
            style={styles.image}
          >
            <View style={styles.vistaPrincipal}>
              <Text style={styles.textoTitulo}>AJUSTES DE USUARIO</Text>
              <Text style={styles.textoTitulo}>_____________________</Text>
              <View>
                <Text style={styles.textoIndices}>Nombre</Text>
                <TextInput
                  style={styles.entradaTexto}
                  defaultValue={nombre}
                  onChangeText={props.handleChange("nombreEdit")}
                />
                <Text>{props.errors.nombreEdit}</Text>
                <Text style={styles.textoIndices}>Documento de identidad</Text>
                <TextInput
                  style={styles.entradaTexto}
                  keyboardType="number-pad"
                  defaultValue={identidad}
                  onChangeText={props.handleChange("identidadEdit")}
                />
                <Text>{props.errors.identidadEdit}</Text>
                <Text style={styles.textoIndices}>Correo electrónico</Text>
                <TextInput
                  style={styles.entradaTexto}
                  defaultValue={email}
                  onChangeText={props.handleChange("emailEdit")}
                />
                <Text>{props.errors.emailEdit}</Text>
                <Text style={styles.textoIndices}>Contraseña</Text>
                <TextInput
                  style={styles.entradaTexto}
                  defaultValue={contra}
                  secureTextEntry
                  onChangeText={props.handleChange("contraEdit")}
                />
                <Text>{props.errors.contraEdit}</Text>
                <Text style={styles.textoIndices}>Nueva contraseña</Text>
                <TextInput
                  style={styles.entradaTexto}
                  secureTextEntry
                  onChangeText={props.handleChange("contraEditConf")}
                />
                <Text>{props.errors.contraEditConf}</Text>
                <View style={styles.vistaBotones}>
                  <TouchableOpacity
                    style={styles.botonRegistro}
                    onPress={presionarCancelar}
                  >
                    <Text style={styles.textoTop}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.botonRegistro}
                    onPress={props.handleSubmit}
                  >
                    <Text style={styles.textoTop}>Aceptar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  vistaPrincipal: {
    justifyContent: "center",
    alignItems: "center",
  },
  textoTitulo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  entradaTexto: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 280,
    height: 50,
    margin: 5,
    fontSize: 20,
    textAlign: "center",
  },
  textoIndices: {
    color: "#fff",
    fontSize: 18,
    textAlign: "left",
    margin: 3,
  },
  textoTop: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5,
  },
  vistaBotones: {
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  botonRegistro: {
    alignItems: "center",
    borderRadius: 35,
    backgroundColor: "#99F98D",
    margin: 10,
    width: 130,
    height: 40,
    justifyContent: "center",
  },
});

export default UserEditScreen;
