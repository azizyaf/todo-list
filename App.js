import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";

import TodoItem from "./components/TodoItem";
import TodosInput from "./components/TodosInput";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const todosHandler = todoTitle => {
    setTodos(currentTodos => [
      ...currentTodos,
      { id: Math.random().toString(), value: todoTitle }
    ]);
    setIsAddMode(false);
  };

  const removeTodo = todoId => {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id != todoId));
  };

  const cancelTodoAdd = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <Button title="ADD NEW TODO" onPress={() => setIsAddMode(true)} />
      <TodosInput 
        visible={isAddMode} 
        onAddTodo={todosHandler}
        cancelTodoAdd={cancelTodoAdd} />

      {/* <ScrollView>
        {todos.map((singleTodo) => <View key={singleTodo} style={styles.todosList}>
          <Text>{singleTodo}</Text>
        </View>)}
      </ScrollView> */}

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={todos}
        renderItem={itemData => (
          <TodoItem
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeTodo}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
