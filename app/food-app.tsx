import SearchBar from "@/components/food-app/SearchBar";
import Header from "@/components/food-app/Header";
import { Image, ScrollView, Switch, Text, View } from "react-native";
import { useState } from "react";
import QuantityInput from "@/components/food-app/QuantityInput";
import FoodCard from "@/components/food-app/FoodCard";

export type FoodItemsType = {
  name: string;
  price: number;
  image: string;
};

const foodItems = [
  {
    name: "Sandwich",
    price: 79,
    image:
      "https://recipesblob.oetker.in/assets/f7ea4ac65c534c1492d156dfac9db2ad/1272x764/sandwichetojpg.webp",
  },
  {
    name: "Burger",
    price: 69,
    image:
      "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg",
  },
  {
    name: "Pizza",
    price: 99,
    image:
      "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp",
  },
  {
    name: "Ice Cream",
    price: 49,
    image:
      "https://carveyourcraving.com/wp-content/uploads/2021/06/chocolate-icecream-in-an-icecream-maker.jpg",
  },
  {
    name: "Summer Salad",
    price: 69,
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg",
  },
  {
    name: "Paani Puri",
    price: 29,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Pani_Puri1.JPG",
  },
];

const FoodApp = () => {
  const [first, setFirst] = useState(true);

  return (
    <View className="w-full mx-auto flex justify-center">
      <View className="px-4 pb-2">
        <Header />
        <SearchBar />
      </View>
      <ScrollView>
        <View className="px-4">
          <View className="flex flex-row justify-between items-center px-2 rounded-xl">
            <Text className="w-fit text-xl text-green-600">Veg Only</Text>
            <Switch
              className="w-fit"
              thumbColor={"#22c55e60"}
              trackColor={{ false: "#00000030", true: "#22c55e60" }}
              onChange={() => setFirst(!first)}
              value={first}
            />
          </View>
          <Image
            className="w-full aspect-video rounded-xl"
            source={{
              uri: "https://ik.imagekit.io/munchery/blog/tr:w-768/the-perfect-6-course-vegetarian-indian-dinner-to-make-at-home.jpeg",
            }}
          />
          <View className="flex gap-2 py-4">
            {foodItems.map((food, i) => (
              <FoodCard food={food} key={i} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FoodApp;
