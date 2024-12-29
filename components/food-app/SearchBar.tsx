import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = () => {
  return (
    <View className="relative">
      <Ionicons name="search" size={22} className="absolute top-2.5 left-2.5" />
      <TextInput
        className="border text-xl border-gray-400 rounded-xl px-10 h-12"
        placeholder="Search"
      />
      <Ionicons name="mic" size={22} className="absolute top-2.5 right-2.5" />
    </View>
  );
};

export default SearchBar;
