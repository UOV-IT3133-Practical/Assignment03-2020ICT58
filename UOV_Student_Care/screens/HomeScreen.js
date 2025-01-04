import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "./ProfileScreen";
import CourseScreen from "./CourseScreen";
import SubjectsScreen from "./SubjectsScreen";

const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = "person";
          } else if (route.name === "Course") {
            iconName = "bag";
          } else if (route.name === "Subjects") {
            iconName = "book";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "#70116d",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          backgroundColor: "#fff",
        },
      })}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Course" component={CourseScreen} />
      <Tab.Screen name="Subjects" component={SubjectsScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
