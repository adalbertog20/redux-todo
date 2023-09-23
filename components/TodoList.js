import { View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import { deleteTodo, markAsCompleted } from "../features/todo/todoSlice";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => {
    return state.todo.todoList;
  });
  return (
    <View>
      {todos.map((todo, index) => (
        <View className="mb-2 flex flex-row">
          {todo.completed && (
            <View className="ml-2">
              <Text className="line-through" key={index}>{`${index + 1}. ${
                todo.content
              }`}</Text>
            </View>
          )}
          {!todo.completed && (
            <View className="ml-2">
              <Text key={index}>{`${index + 1}. ${todo.content}`}</Text>
            </View>
          )}
          <View className="ml-2 bg-red-400 rounded-md flex items-center justify-center">
            <Icon
              name="delete-forever"
              size={30}
              color={"#ffffff"}
              onPress={() => dispatch(deleteTodo(todo.id))}
            />
          </View>
          <View className="ml-2 bg-emerald-400 rounded-md flex items-center justify-center">
            <Icon
              name="done"
              size={30}
              color={"#ffffff"}
              onPress={() => dispatch(markAsCompleted(todo.id))}
            />
          </View>
        </View>
      ))}
    </View>
  );
}
