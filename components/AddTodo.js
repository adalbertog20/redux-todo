import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { addTodo } from "../features/todo/todoSlice";
import { View, Pressable, TextInput, Text, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function AddTodo() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      Alert.alert("Escribe algo");
      return;
    }
    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <View className=" flex justify-center items-center">
      <View className="flex flex-row mb-2">
        <TextInput
          style={{
            borderColor: "gray",
            color: "white",
          }}
          placeholderTextColor={"gray"}
          className="w-96 border p-2 rounded-lg"
          placeholder="type your task to do"
          value={value}
          onChangeText={(value) => setValue(value)}
        />
        <View className="ml-2 bg-emerald-500 focus:bg-emerald-200 rounded-md flex items-center justify-center">
          <Icon name="add" size={30} color={"#ffffff"} onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
}
