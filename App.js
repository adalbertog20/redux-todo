import { View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./app/store";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import React, { useEffect, useState } from "react";
import ListUsers from "./components/ListUsers";

export default function App() {
  return (
    <Provider store={store}>
      <View className="mt-20 flex items-center justify-center bg-white">
        <AddTodo />
        <TodoList />
      </View>
    </Provider>
  );
}
