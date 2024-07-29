import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import inputsStyles from "../styles/inputs";

export default function ModalEdit({ setGoalToUpdate, goalToUpdate, updateGoalHandler, modalVisible, setModalVisible }) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Modifier un objectif</Text>

            <TextInput
              style={[inputsStyles.input, styles.modalInput]}
              placeholder="Nom de l'objectif"
              value={goalToUpdate.text}
              onChangeText={(text) => setGoalToUpdate({ id: goalToUpdate.id, text })}
            />

            <View style={styles.modalButtonsContainer}>
              <Button title="Modifier" onPress={() => updateGoalHandler(goalToUpdate.id, goalToUpdate.text)} />
              <Button title="Fermer" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
  },

  modalTitle: {
    fontSize: 18,
    marginBottom: 12,
  },

  modalButtonsContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
  },
});
