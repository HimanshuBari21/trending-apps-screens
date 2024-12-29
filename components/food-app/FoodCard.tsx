import { Image, Text, View } from "react-native";
import QuantityInput from "./QuantityInput";
import { FoodItemsType } from "@/app/food-app";

const FoodCard = ({ food }: { food: FoodItemsType }) => {
  return (
    <View className="flex flex-row w-full p-2 shadow-lg bg-white rounded-2xl">
      <View>
        <Image
          className="h-24 aspect-[4/3] rounded-xl"
          source={{ uri: food.image }}
        />
      </View>
      <View className="flex-1 p-2 pl-4">
        <Text className="text-xl">{food.name}</Text>
        <Text className="text-md text-gray-400">Rs. {food.price}</Text>
      </View>
      <QuantityInput />
    </View>
  );
};

export default FoodCard;
