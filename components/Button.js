import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Button({ ...props }) {
  return (
    <View className="flex items-center justify-center">
      <View className="mt-10 bg-tilin items-center justify-center w-16 h-16 rounded-full">
        <Icon className="" name="add" size={32} color={"#ffffff"} {...props} />
      </View>
    </View>
  );
}
