// MainStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import EditProfileScreen from "../screens/EditProfileScreen";

const Stack = createStackNavigator();

function HeaderMenu() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ marginLeft: 15 }}
      onPress={() => {
        // Aquí podrías abrir un modal o menú
        navigation.navigate("EditProfile");
      }}
    >
      <Text style={{ color: "#fff", fontSize: 22 }}>☰</Text>
    </TouchableOpacity>
  );
}

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#4A90E2" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Inicio",
          headerLeft: () => <HeaderMenu />,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{ title: "Editar Perfil" }}
      />
    </Stack.Navigator>
  );
}
