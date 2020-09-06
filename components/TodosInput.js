import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const TodosInput = props => {
  const [todo, setTodo] = useState("");

  const todoTextHandler = newTodo => {
    setTodo(newTodo);
  };

  const addTodoHandler = () => {
    props.onAddTodo(todo);
    setTodo("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Todo"
          style={styles.textInput}
          onChangeText={todoTextHandler}
        />
        <View style={styles.buttonsContainer}>
          <Button
            title="CANCEL"
            color="red"
            onPress={props.cancelTodoAdd}
            style={styles.buttons}
          />
          <Button title="ADD" onPress={addTodoHandler} style={styles.buttons} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    width: "60%"
  },
  buttons: {
    width: "40%"
  }
});

export default TodosInput;
