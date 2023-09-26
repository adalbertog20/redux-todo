import { View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./app/store";
import React, { useEffect, useState } from "react";
import Todo from "./screens/Todo";

export default function App() {
  return (
    <Provider store={store}>
      <View className="bg-black flex items-center justify-center h-screen">
        <Todo />
      </View>
    </Provider>
  );
}
