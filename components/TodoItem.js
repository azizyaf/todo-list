import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TodoItem = props => {
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.id)}>
      <View style={styles.todosList}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todosList: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});

export default TodoItem;
