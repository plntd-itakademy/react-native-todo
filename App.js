import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import GoalsList from "./components/GoalsList";
import ModalEdit from "./components/ModalEdit";
import inputsStyles from "./styles/inputs";

export default function App() {
  const [goals, setGoals] = useState([
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d'altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ]);
  const [newGoal, setNewGoal] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [goalToUpdate, setGoalToUpdate] = useState({ id: 0, text: "" });

  const addGoalHandler = () => {
    if (newGoal.trim().length > 0) {
      setGoals((currentGoals) => [...currentGoals, newGoal]);
      setNewGoal("");
    }
  };

  const deleteGoalHandler = (index) => {
    setGoals((currentGoals) => currentGoals.filter((_, i) => i !== index));
  };

  const updateGoalHandler = (index, text) => {
    setGoals((currentGoals) => {
      const updatedGoals = [...currentGoals];
      updatedGoals[index] = text;
      return updatedGoals;
    });
    setModalVisible(false);
  };

  const openModalHandler = (index, text) => {
    setGoalToUpdate({ id: index, text });
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.redText}>
        Open up <Text style={styles.bold}>App.js</Text> to start working on your app!
      </Text>

      <Text style={styles.title}>Liste des objectifs</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[inputsStyles.input, styles.createGoalInput]}
          placeholder="Ajouter un nouvel objectif"
          value={newGoal}
          onChangeText={setNewGoal}
        />
        <Button title="Ajouter" onPress={addGoalHandler} />
      </View>

      <GoalsList goals={goals} openModalHandler={openModalHandler} deleteGoalHandler={deleteGoalHandler} />

      <ModalEdit
        setGoalToUpdate={setGoalToUpdate}
        goalToUpdate={goalToUpdate}
        updateGoalHandler={updateGoalHandler}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 50,
  },

  bold: {
    fontWeight: "bold",
  },

  redText: {
    color: "red",
    textAlign: "center",
  },

  title: {
    fontSize: 18,
    marginVertical: 10,
    marginTop: 50,
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  createGoalInput: {
    width: "70%",
  },
});
