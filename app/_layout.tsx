import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Mealbd" }} />
      <Stack.Screen name="[mealId]" options={{ title: "Info" }} />
    </Stack>
  );
}
