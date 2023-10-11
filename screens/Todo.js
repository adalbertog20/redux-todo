import { Text, View, Modal, TextInput, Pressable } from "react-native";
import TodoList from "../components/TodoList";
import Button from "../components/Button";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import AddTodo from "../components/AddTodo";

export default function Todo() {
  const [modalVisible, setModalVisible] = useState(false);
  const [todo, setTodo] = useState(false);
  const dispatch = useDispatch();

  const handleTodo = (todo) => {
    dispatch(addTodo(todo));
    setTodo("");
  }
  return (
    <View>
      <AddTodo />
      <TodoList />
      <Button onPress={() => setModalVisible(!modalVisible)} />
      {/*      <View className="flex items-center justify-center">
        <Modal visible={modalVisible}>
          <View className="bg-one_bg p-10 h-screen">
            <Text className="pb-2 text-lg text-foreground">Title</Text>
            <TextInput
              defaultValue={todo}
              onChangeText={newT => setTodo(newT)}
              className="text-foreground bg-one_bg2 border-foreground p-2 text-lg rounded-lg border-2" />

            <Pressable onPress={handleTodo(todo)} className="flex items-center justify-center p-2 bg-green w-24 rounded-lg">
              <Text className="font-bold text-lg text-white">Aceptar</Text>
            </Pressable>

            <View className="w-16 h-16 bg-red flex items-center justify-center rounded-full">
              <Icon
                name="remove"
                size={24}
                color={"#ffffff"}
                onPress={handleTodo(todo)}
              />
            </View>
          </View>
        </Modal>
      </View>*/}
    </View>
  );
}
