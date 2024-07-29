import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function GoalsList({ goals, openModalHandler, deleteGoalHandler }) {
  return (
    <ScrollView style={styles.scrollView}>
      {goals.map((goal, index) => (
        <View key={index} style={styles.goalContainer}>
          <Text style={styles.goalText}>{goal}</Text>

          <View style={styles.goalActions}>
            <TouchableOpacity onPress={() => openModalHandler(index, goal)}>
              <Text>Editer</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteGoalHandler(index)}>
              <Text style={styles.deleteButtonText}>x</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: "100%",
  },

  goalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
  },

  goalActions: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
  },

  goalText: {
    fontSize: 16,
    maxWidth: "80%",
  },

  deleteButton: {
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "#fff",
    backgroundColor: "#e74c3c",
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    width: 20,
  },
  deleteButtonText: {
    color: "white",
  },
});
