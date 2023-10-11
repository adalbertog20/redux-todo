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
    <View className="ml-10 bg-one_bg2 p-10 rounded-lg mr-10">
      {todos.map((todo, index) => (
        <View className="mb-2 flex flex-row bg-darker_black p-2 rounded-lg">
          {todo.completed && (
            <View className="" key={index}>
              <Text className="text-xl text-foreground line-through">{`${index + 1
                }. ${todo.content}`}</Text>
            </View>
          )}
          {!todo.completed && (
            <View className="" key={index}>
              <Text className="text-xl text-foreground">{`${index + 1}. ${todo.content
                }`}</Text>
            </View>
          )}
          <View className="ml-2 bg-red rounded-md flex items-center justify-center">
            <Icon
              name="delete-forever"
              size={40}
              color={"#ffffff"}
              onPress={() => dispatch(deleteTodo(todo.id))}
            />
          </View>
          <View className="ml-2 bg-green rounded-full flex items-center justify-center">
            <Icon
              name="done"
              size={40}
              color={"#ffffff"}
              onPress={() =>
                dispatch(
                  markAsCompleted({ id: todo.id, completed: !todo.completed })
                )
              }
            />
          </View>
        </View>
      ))}
    </View>
  );
}
