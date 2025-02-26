import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import ProfileScreen from "./ProfileScreen";
import { Ionicons } from "@expo/vector-icons"; // Thêm icon từ thư viện Expo

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#1E1E1E" }, // Màu header tối
          headerTintColor: "#fff",
          drawerActiveBackgroundColor: "#3A3A3A", // Màu xám đậm
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#B0B0B0", // Màu xám nhạt hơn
        }}
        
      >
        <Drawer.Screen
          name="Home"
          component={StackNavigator}
          options={{ title: " Home",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
           }}
          
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: " Profile",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
           }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
