import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const QuantityInput = () => {
  const [quantity, setQuantity] = useState("0");

  return (
    <View className="flex p-2 pr-4 flex-row gap-2 justify-end items-center">
      <Pressable
        onPress={() =>
          Number(quantity)
            ? setQuantity((Number(quantity) - 1).toString())
            : null
        }
      >
        <Text className="text-3xl px-2.5 border border-gray-200 rounded-full">
          -
        </Text>
      </Pressable>
      <TextInput value={quantity} editable={false} />
      <Pressable
        onPress={() =>
          Number(quantity) < 10
            ? setQuantity((Number(quantity) + 1).toString())
            : null
        }
      >
        <Text className="text-3xl px-2 border border-gray-200 rounded-full">
          +
        </Text>
      </Pressable>
    </View>
  );
};

export default QuantityInput;
