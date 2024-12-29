import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  return (
    <View className="w-full flex-row items-center justify-between px-1 py-4">
      <View className="flex flex-1 flex-row gap-2">
        <Ionicons name="location-sharp" size={26} />
        <Text className="text-xl line-clamp-1">
          69, Horse Street, Pune - 410506
        </Text>
      </View>
      <View className="flex flex-row">
        <Ionicons name="person-circle" size={26} />
      </View>
    </View>
  );
};

export default Header;
