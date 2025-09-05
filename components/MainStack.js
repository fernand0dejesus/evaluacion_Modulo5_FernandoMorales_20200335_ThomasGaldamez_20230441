import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Text, Modal, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import EditProfileScreen from "../screens/EditProfileScreen";

const Stack = createStackNavigator();

// 🔹 Aquí está tu HeaderMenu dentro del mismo archivo
function HeaderMenu() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* Botón ☰ */}
      <TouchableOpacity
        style={{ marginLeft: 15 }}
        onPress={() => setVisible(true)}
      >
        <Text style={{ color: "#fff", fontSize: 22 }}>☰</Text>
      </TouchableOpacity>

      {/* Menú desplegable */}
      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "flex-end",
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              marginTop: 60,
              marginRight: 10,
              borderRadius: 10,
              padding: 15,
              width: 180,
              shadowColor: "#000",
              shadowOpacity: 0.2,
              shadowRadius: 5,
              elevation: 5,
            }}
          >
            {/* Opción 1 */}
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
                navigation.navigate("EditProfile");
              }}
            >
              <Text style={{ fontSize: 16, paddingVertical: 8 }}>
                Editar Perfil
              </Text>
            </TouchableOpacity>

            {/* Opción 2 */}
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
                alert("Cerrar sesión"); // tu lógica aquí
              }}
            >
              <Text style={{ fontSize: 16, paddingVertical: 8 }}>
                Cerrar sesión
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
// 🔹 Stack Navigator
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