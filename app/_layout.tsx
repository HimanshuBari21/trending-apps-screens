import { Stack } from "expo-router";
import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen
          name="food-app"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="x" />
      </Stack>
    </GestureHandlerRootView>
  );
}
