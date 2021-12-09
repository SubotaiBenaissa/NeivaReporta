import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

function UserView({ navigation }) {
  const identidad = navigation.getParam("identidad", "no identidad");
  const nombre = navigation.getParam("nombre", "Anónimo");
  const contra = navigation.getParam("contra");
  const email = navigation.getParam("email");

  const presionarEditar = () => {
    navigation.navigate("UserEdit", {
      identidad: identidad,
      nombre: nombre,
      contra: contra,
      email: email,
    });
  };

  const presionarCancelar = () => {
    setModalOpen(false);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [reports, setReport] = useState([{ content: "" }]);
  const [picture, setPicture] = useState(false);

  const addReport = () => {
    setReport((report) => {
      return [report];
    });
    setModalOpen(false);
  };

  const picFromGallery = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      console.log(data);
    } else {
      Alert.alert("Se necesita permiso para acceder a la galería");
    }
  };

  const picFromCamera = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    if (granted) {
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      console.log(data);
    } else {
      Alert.alert("Se necesita permiso para acceder a la cámara");
    }
  };

  return (
    <View>
      <Modal visible={modalOpen} animationType="slide">
        <Formik
          initialValues={{ content: "" }}
          onSubmit={(values, actions) => {
            addReport(values);
            console.log(values);
            actions.resetForm();
            setModalOpen(false);
          }}
        >
          {(props) => (
            <View>
              <View style={styles.container1}>
                <Text style={styles.textoUser2}>Ingresar Reporte{"\n"}</Text>
                <TextInput
                  style={styles.inputTexto}
                  multiline
                  value={props.values.content}
                  onChangeText={props.handleChange("content")}
                />
              </View>
              <TouchableOpacity
                style={styles.textoBotonesModal}
                onPress={picFromCamera}
              >
                <Text>Tomar foto</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.textoBotonesModal}
                onPress={picFromGallery}
              >
                <Text>Buscar imagen</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.textoBotonesModal}
                onPress={props.handleSubmit}
              >
                <Text>Enviar Reporte</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.textoBotonesModal}
                onPress={presionarCancelar}
              >
                <Text>Cancelar</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </Modal>

      <View style={styles.container0}>
        <Text style={styles.textoUser}>
          {nombre}
          {"\n"} {identidad}
          {"\n"}
        </Text>
        <TouchableOpacity onPress={presionarEditar}>
          <Text>ir a editar usuario</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.linestyle}>
        {" "}
        __________________________________{"\n"}
      </Text>

      <View style={styles.container3}>
        <TouchableOpacity
          style={styles.textoBotonesModal}
          onPress={() => {
            setModalOpen(true);
          }}
        >
          <Text>Ingresar Reporte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullcontainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  container0: {
    height: "60%",
    width: "100%",
    backgroundColor: "#4EFF85",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    position: "relative",
  },
  container1: {
    height: 250,
    backgroundColor: "#e2ddd0",
    justifyContent: "center",
    alignItems: "center",
    margin: "5%",
    borderRadius: 20,
  },
  container3: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  image: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  linestyle: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  textoUser2: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
  },
  textoUser: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5,
  },
  inputTexto: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "90%",
    height: "60%",
    margin: 20,
    fontSize: 15,
    textAlign: "center",
  },
  textoBotonesModal: {
    alignItems: "center",
    borderRadius: 35,
    backgroundColor: "#99F98D",
    margin: 10,
    width: 130,
    height: 40,
    justifyContent: "center",
  },
});

export default UserView;
