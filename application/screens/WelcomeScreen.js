import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

function WelcomeScreen({ navigation }) {
  const presionarIniciar = () => {
    navigation.navigate("LogIn");
  };
  const presionarRegistro = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/monumentoInicio.jpg")}
        style={styles.image}
        fadeDuration={1000}
      >
        <View style={styles.container}>
          <Text style={styles.text}> NEIVA REPORTA </Text>
          <Text style={styles.text2}>________________________ {"\n"}</Text>
          <Text style={styles.text2}>
            Para hacer de nuestra {"\n"} ciudad un sitio mejor {"\n"}
          </Text>

          <View>
            <TouchableOpacity
              style={styles.botonVista}
              onPress={presionarIniciar}
            >
              <Text style={styles.textoBoton}>I N I C I O</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botonVista}
              onPress={presionarRegistro}
            >
              <Text style={styles.textoBoton}>R E G I S T R O</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
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

  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    //fontFamily: "Segoe UI",
  },

  text2: {
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  botonVista: {
    alignItems: "center",
    padding: 15,
    borderRadius: 35,
    backgroundColor: "#99F98D",
    fontWeight: "bold",
    justifyContent: "space-evenly",
    margin: 10,
  },

  textoBoton: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
