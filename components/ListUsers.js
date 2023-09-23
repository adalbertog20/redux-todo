import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/todo/userSlice";
import { FlatList } from "react-native";
export default function ListUsers() {
  const { users, status, error } = useSelector((state) => state.user);
  const [user, setUser] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    setUser(dispatch(fetchUsers()));
  }, [dispatch]);

  return (
    <View>
      <FlatList
        data={user}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
