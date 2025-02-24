import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from '@react-navigation/stack';
import styles from "./styles";

const ScreenOne = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Cho bạn</Text>
    </View>
);

const ScreenTwo = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Trực tiếp</Text>
    </View>
);

const ScreenThree = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Trò chơi</Text>
    </View>
);

const TopTab = createMaterialTopTabNavigator();

function TopTabScreen() {
    return (
        <TopTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Cho bạn') {
                        iconName = "Person";
                    } else if (route.name === 'Trực tiếp') {
                        iconName = 'play-circle';
                    } else if (route.name === 'Trò chơi') {
                        iconName = 'game-controller';
                    }

                    // Bạn có thể thay đổi kích thước và màu sắc của icon ở đây
                    return <Ionicons name={iconName} size={16} color={'tomato'} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#333', // Màu nền
                }
            })}
        >

            <TopTab.Screen name="Cho bạn" component={ScreenOne} />
            <TopTab.Screen name="Trực tiếp" component={ScreenTwo} />
            <TopTab.Screen name="Trò chơi" component={ScreenThree} />
        </TopTab.Navigator>
    );
}




const HomeScreen = () => <TopTabScreen
/>


const SettingsScreen = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings Screen</Text>
    </View>
);

const ProfileScreen = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Profile Screen</Text>
    </View>
);

const BottomTab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>

            <BottomTab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;
                        if (route.name === "Home") {
                            iconName = "home-outline";
                        } else if (route.name === "Settings") {
                            iconName = "settings-outline";
                        } else if (route.name === "Profile") {
                            iconName = "person-outline";
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: "gray",
                    tabBarStyle: {
                        backgroundColor: "#222", // Màu nền
                        borderTopWidth: 0, // Loại bỏ viền trên
                        height: 60, // Chiều cao của menu
                        paddingTop: 8,
                        margin: 20,
                        borderRadius: 10,
                    },
                })}
            >
                <BottomTab.Screen name="Home" component={HomeScreen} />
                <BottomTab.Screen name="Profile" component={ProfileScreen} />
                <BottomTab.Screen name="Settings" component={SettingsScreen} />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}
